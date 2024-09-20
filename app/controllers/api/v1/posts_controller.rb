class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]

  # GET /posts
  def index
    limit = params[:limit].to_i > 0 ? params[:limit].to_i : 5
    page = params[:page].to_i > 0 ? params[:page].to_i : 1

    total_posts = Post.count
    @posts = Post.order(created_at: :desc).limit(limit).offset((page - 1) * limit)
    total_pages = (total_posts / limit.to_f).ceil

    post_with_images = @posts.map do |post|
      post_json = post.as_json
      post_json['image_url'] = url_for(image.post) if post.image.attached?
      post_json
    end

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
    post_json = @post.as_json
    post_json['image_url'] = url_for(image.post) if @post.image.attached?
    render json: post_json
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      @post.image.attach(params[:post][:image]) if params[:post][:image].present?
      render json: @post, status: :created, location: api_v1_post_url(@post)
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      @post.image.attach(params[:post][:image]) if params[:post][:image].present?
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
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:body,:title , :image)
    end
end
