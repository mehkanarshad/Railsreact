class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]

  # GET /posts
  def index
    limit = params[:limit].to_i > 0 ? params[:limit].to_i : 5
    page = params[:page].to_i > 0 ? params[:page].to_i : 1

    total_posts = Post.count
    @posts = Post.order(created_at: :desc).limit(limit).offset((page - 1) * limit)
    total_pages = (total_posts / limit.to_f).ceil

    render json: {
      posts: @posts,
      meta: {
        page_number: page,
        total_pages: total_pages,
        total_posts: total_posts
      }
    }
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: api_v1_post_url(@post)
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:body,:title)
    end
end
