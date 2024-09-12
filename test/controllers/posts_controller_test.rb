require "test_helper"

class postsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one)
  end

  test "should get index" do
    get posts_url, as: :json
    assert_response :success
  end

  test "should create post" do
    assert_difference("post.count") do
      post posts_url, params: { post: { body: @post.body } }, as: :json
    end

    assert_response :created
  end

  test "should show post" do
    get post_url(@post), as: :json
    assert_response :success
  end

  test "should update post" do
    patch post_url(@post), params: { post: { body: @post.body } }, as: :json
    assert_response :success
  end

  test "should destroy post" do
    assert_difference("post.count", -1) do
      delete post_url(@post), as: :json
    end

    assert_response :no_content
  end
end
