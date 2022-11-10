class UsersController < ApplicationController

    def create
          if !User.exists?(email: params[:email])
            user = User.create(user_params)
            render json: user, status: :ok
          else
            render json: "User already exists", status: :unprocessable_entity
          end
      end

    def show
      user = User.find_by(id: params[:id])
      render json: user, status: :accepted  
    end

private

    def user_params
        params.permit(:id, :username, :email, :first_name, :last_name, :image)
    end
end
