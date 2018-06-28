# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on "click", "[data-behavior~=submit_on_check]", ->
  $(@).closest("form").submit()

$(document).on "blur", ".editing [data-behavior~=submit_on_blur]", ->
  $(@).closest("form").submit()

# Note that this is one of two places where "state" is kept in the DOM.
# Thankfully, it's view state, not the actual state of our models
$(document).on "dblclick", "[data-behavior~=toggle_form_on_dblclick]", ->
  $(@).addClass("editing")
  $(@).find(".toggle-me").show 0, ->
    $(@).find(".edit").focus()

# Note that this is one of two places where "state" is kept in the DOM.
$(document).on "keydown", "[data-behavior~=close_on_esc]", (event) ->
  if event.keyCode == 27
    $(@).parents("li").removeClass("editing")
    $(@).parents(".toggle-me").hide()

$(document).on "submit", "[data-behavior~=intercept_destroy]", (event) ->
  if $(@).find("#todo_title").val() == ""
    event.preventDefault()
    $(@).parent().find(".destroy_todo").submit();

$(document).on "ajax:complete", "#new_todo", (event, xhr, status) ->
  $('#new-todo').val('')
