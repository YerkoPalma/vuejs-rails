require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  setup do
    @user = users(:one)
  end

  #test "should get index" do
  #  get "/users"
  #  assert_response :success
  #  assert_not_nil assigns(:users)
  #end

  test "should create user" do
    assert_difference('User.count') do
      post :create, { user: { email: @user.email, name: @user.name }, format: :json }
      
      assert_includes @response["Content-Type"], "application/json"
    end

    #expect(response.content_type).to eq("application/json")
  end

  #test "should show user" do
  #  get :show, id: @user
  #  assert_response :success
  #end

  #test "should get edit" do
  #  get :edit, id: @user
  #  assert_response :success
  #end

  #test "should update user" do
  #  patch :update, id: @user, user: { email: @user.email, name: @user.name }
  #  assert_redirected_to user_path(assigns(:user))
  #end

  #test "should destroy user" do
  #  assert_difference('User.count', -1) do
  #    delete "users/#{@user.id}.json"
  #  end

  #  assert_redirected_to users_path
  #end
end
