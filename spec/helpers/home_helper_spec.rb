require 'spec_helper'

# Specs in this file have access to a helper object that includes
# the HomeHelper. For example:
#
# describe HomeHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       helper.concat_strings("this","that").should == "this that"
#     end
#   end
# end

describe HomeHelper do

  describe '#js_framework' do

    it 'hooks into backbone when fw == "backbone"' do
      expect(js_framework('backbone')).to eql(javascript_include_tag('backbonejs/home'))
    end

    it 'hooks into canjs when fw == "canjs"' do
      expect(js_framework('canjs')).to eql(javascript_include_tag('canjs/home'))
    end

    it 'hooks into canjs when fw == ""' do
      expect(js_framework('')).to eql(javascript_include_tag('canjs/home'))
    end

    it 'hooks into canjs when fw == "bullshit"' do
      expect(js_framework('bullshit')).to eql(javascript_include_tag('canjs/home'))
    end

  end

end
