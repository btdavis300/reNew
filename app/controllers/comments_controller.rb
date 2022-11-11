class CommentsController < ApplicationController

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def article_comments
        comments = Comment.where(article_url: params[:article_url])
        render json: comments, status: :ok
    end

private

    def comment_params
        params.permit(:user_id, :article_url, :content)
    end
end
