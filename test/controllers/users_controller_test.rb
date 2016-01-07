require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  setup do
    @user = users(:one)
  end
  
  test "should get index.json" do
    get :index, {format: :json}
    assert_response :success
    assert_includes @response["Content-Type"], "application/json"
    assert_not_nil assigns(:users)
  end
  
  test "should get index.html" do
    get :index
    assert_response :success
    assert_not_includes @response["Content-Type"], "application/json"
  end
  
  test "should get show.json" do
    get :show, { id: @user, format: :json}
    assert_response :success
    assert_includes @response["Content-Type"], "application/json"
    
  end
  
  test "should not get show.html" do
    assert_raises ActionController::UnknownFormat do
      get :show, id: @user
    end
  end
  
  test "should create user with json format" do
    assert_difference('User.count') do
      post :create, { user: { email: @user.email, name: @user.name }, format: :json }
      assert_includes @response["Content-Type"], "application/json"
    end
  end
  
  test "should not create user without json format" do
    assert_raises ActionController::UnknownFormat do
      post :create, user: { email: @user.email, name: @user.name }
    end
  end

  test "should update user with json format" do
    put :update, { id: @user, user: { email: @user.email, name: @user.name }, format: :json }
  end
  
  test "should not update user without json format" do
    assert_raises ActionController::UnknownFormat do
      put :update, id: @user, user: { email: @user.email, name: @user.name }
    end
  end
  
  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete :destroy, {id: @user, format: :json}
    end
  end
  
  test "should not destroy user" do
    assert_raises ActionController::UnknownFormat do
      delete :destroy, id: @user
    end
  end
  
end
