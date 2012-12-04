require 'test_helper'

class ExamplesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get hero" do
    get :hero
    assert_response :success
  end

  test "should get fluid" do
    get :fluid
    assert_response :success
  end

  test "should get starter-template" do
    get :starter-template
    assert_response :success
  end

end
