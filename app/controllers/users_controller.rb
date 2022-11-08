class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, status: :accepted
    end

private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end
