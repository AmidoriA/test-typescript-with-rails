class PagesController < ApplicationController
  def index
    params[:num] = '1' unless params[:num].present?
  end
end
