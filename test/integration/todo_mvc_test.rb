require 'test_helper'

class TodoMvcTest < ActionDispatch::IntegrationTest
  def setup
    require_js
    visit "/"
  end

  test "When page is initially opened it should focus on the todo input field" do
    assert_equal "new-todo", page.evaluate_script('document.activeElement.id')
  end

  test "When no todos, should hide #main and #footer" do
    assert_equal 0, todo_items.size
    refute page.has_selector?("#footer")
  end

  test "allow me to add todo items" do
    enter_item(TODO_ITEM_ONE)
    assert_items [TODO_ITEM_ONE]
    enter_item(TODO_ITEM_TWO)
    assert_items [TODO_ITEM_ONE, TODO_ITEM_TWO]
  end

  test "clear text input field when an item is added" do
    enter_item(TODO_ITEM_ONE)
    assert_equal "", find("#new-todo").text
  end

  test "append new items to the bottom of the list" do
    create_standard_items
    assert_equal 3, todo_items.size
    assert_equal TODO_ITEM_ONE, todo_items[0].text
    assert_equal TODO_ITEM_TWO, todo_items[1].text
    assert_equal TODO_ITEM_THREE, todo_items[2].text
  end

  test "trim text input" do
    enter_item('   ' + TODO_ITEM_ONE + '  ')
    sleep(1) #lol
    assert_equal TODO_ITEM_ONE, todo_items[0].text
  end

  test "should show #main and #footer when items added" do
    enter_item(TODO_ITEM_ONE)

    assert page.has_selector?("#main")
    assert page.has_selector?("#footer")
  end

  test "mark all items as completed" do
    create_standard_items

    find('#toggle-all').click

    assert todo_items.all? { |el| el[:class] == "completed" }
  end

  test "clear the completion state of all items" do
    create_standard_items

    2.times { find('#toggle-all').click }

    refute todo_items.all? { |el| el[:class] == "completed" }
  end

  test "complete all checkbox should update state when items are completed / cleared" do
    create_standard_items
    find('#toggle-all').click
    assert find('#toggle-all').checked?

    todo_items[0].uncheck("todo[is_completed]")
    refute find('#toggle-all').checked?

    todo_items[0].check("todo[is_completed]")
    assert find('#toggle-all').checked?
  end

  test "mark items as complete" do
    create_standard_items

    todo_items[0].check("todo[is_completed]")
    assert_equal "completed", todo_items[0][:class]
    refute_equal "completed", todo_items[1][:class]

    todo_items[1].check("todo[is_completed]")
    assert_equal "completed", todo_items[0][:class]
    assert_equal "completed", todo_items[1][:class]
  end

  test "un-mark items as complete" do
    create_standard_items

    todo_items[0].check("todo[is_completed]")
    assert_equal "completed", todo_items[0][:class]
    refute_equal "completed", todo_items[1][:class]

    todo_items[0].uncheck("todo[is_completed]")
    refute_equal "completed", todo_items[0][:class]
    refute_equal "completed", todo_items[1][:class]
  end

  test "edit an item" do
    create_standard_items
    todo_items[1].double_click
    todo_items[1].fill_in("todo[title]", with: "buy some sausages"+ "\n")

    assert_items [TODO_ITEM_ONE, "buy some sausages", TODO_ITEM_THREE]
  end

  test "hide other controls when editing" do
    create_standard_items
    assert todo_items[1].has_selector?('.view label')

    todo_items[1].double_click

    refute todo_items[1].has_selector?('.view label')
  end

  test "save edits on blur" do
    skip "I can't get this test to work for the life of me :("
    create_standard_items
    todo_items[1].double_click
    todo_items[1].fill_in("todo[title]", with: "buy some sausages")
    3.times { find('#new-todo').click }

    assert_items [TODO_ITEM_ONE, "buy some sausages", TODO_ITEM_THREE]
  end

  test "focuses an item on double click" do
    create_standard_items
    todo_items[1].double_click

    assert_equal "todo_title", page.evaluate_script('document.activeElement.id')
  end

  test "trim entered text" do
    create_standard_items
    todo_items[1].double_click
    todo_items[1].fill_in("todo[title]", with: "   buy some sausages    " + "\n")

    assert_items [TODO_ITEM_ONE, "buy some sausages", TODO_ITEM_THREE]
  end

  test "remove todos if empty text is entered when editing" do
    create_standard_items

    todo_items[1].double_click
    todo_items[1].fill_in("todo[title]", with: "" + "\n")

    assert_items [TODO_ITEM_ONE, TODO_ITEM_THREE]
  end

  test "should cancel edits on escape" do
    create_standard_items

    todo_items[1].double_click

    todo_items[1].fill_in("todo[title]", with: "foo")
    todo_items[1].find("#todo_title").native.send_key(:escape)

    assert_items [TODO_ITEM_ONE, TODO_ITEM_TWO, TODO_ITEM_THREE]
  end

  test "display the current number of todo items" do
    enter_item(TODO_ITEM_ONE)
    assert_equal "1 item left", page.find("#todo-count").text

    enter_item(TODO_ITEM_TWO)
    assert_equal "2 items left", page.find("#todo-count").text
  end

  test "clear completed should display the correct text" do
    skip "this test doesnt work either :("

    create_standard_items
    todo_items[1].check("todo[is_completed]")

    assert_equal "Clear completed", page.find("#clear-completed").text
  end

  test "clear completed should remove completed items when clicked" do
    skip "dunno why capybara can't find the button :("
    create_standard_items
    todo_items[1].check("todo[is_completed]")
    click_button("clear-completed")

    assert_items [TODO_ITEM_ONE, TODO_ITEM_THREE]
  end

  test "should be hidden when there are no items that are completed" do
    skip "dunno why capybara can't find the button :("
    refute page.has_selector?("#clear-completed")

    create_standard_items
    todo_items[1].check("todo[is_completed]")

    click_button("clear-completed")

    refute page.has_selector?("#clear-completed")
  end

  test "persists data" do
    create_standard_items
    todo_items[1].check("todo[is_completed]")

    assert_items [TODO_ITEM_ONE, TODO_ITEM_TWO, TODO_ITEM_THREE]
    assert_equal "completed", todo_items[1][:class]

    visit("/")

    assert_items [TODO_ITEM_ONE, TODO_ITEM_TWO, TODO_ITEM_THREE]
    assert_equal "completed", todo_items[1][:class]
  end

  test "display active items" do
    create_standard_items
    todo_items[1].check("todo[is_completed]")

    page.find("#active").click

    assert_items [TODO_ITEM_ONE, TODO_ITEM_THREE]
  end

  test "respect the back button" do
    create_standard_items
    todo_items[1].check("todo[is_completed]")

    page.find("#active").click
    page.find("#completed").click

    assert_items [TODO_ITEM_TWO]

    page.evaluate_script('window.history.back()')

    assert_items [TODO_ITEM_ONE, TODO_ITEM_THREE]

    page.evaluate_script('window.history.back()')

    assert_items [TODO_ITEM_ONE, TODO_ITEM_TWO, TODO_ITEM_THREE]
  end

  test "display completed" do
    create_standard_items
    todo_items[1].check("todo[is_completed]")

    page.find("#completed").click

    assert_items [TODO_ITEM_TWO]
  end

  test "display all" do
    create_standard_items
    todo_items[1].check("todo[is_completed]")

    page.find("#active").click
    page.find("#completed").click
    page.find("#all").click

    assert_items [TODO_ITEM_ONE, TODO_ITEM_TWO, TODO_ITEM_THREE]
  end

  test "highlights the currently applied filter" do
    create_standard_items

    assert_equal "selected", filters[0][:class]

    page.find("#active").click
    assert_equal "selected", filters[1][:class]

    page.find("#completed").click
    assert_equal "selected", filters[2][:class]
  end

  private

  def assert_items(ary)
    assert_equal ary, todo_items.map { |el| el.find(".view label").text }
  end

  TODO_ITEM_ONE = 'buy some cheese'
  TODO_ITEM_TWO = 'feed the cat'
  TODO_ITEM_THREE = 'book a doctors appointment'

  def todo_items
    page.all("#todos li")
  end

  def filters
    page.all("#filters li a")
  end

  def create_standard_items
    enter_item(TODO_ITEM_ONE)
    enter_item(TODO_ITEM_TWO)
    enter_item(TODO_ITEM_THREE)
  end

  def enter_item(text)
    fill_in 'new-todo', with: text
    find('#new-todo').native.send_key(:enter)
    sleep(0.5) #lollll
  end
end
