require 'httparty'
require 'json'
class WeatherController < ApplicationController
  def index
    if params[:city_name] && params[:country_code]
      if (!params[:city_name].empty? && !params[:country_code].empty?)
        response=OpenWeatherMap.new(params[:city_name], params[:country_code], "imperial", 16)
      #  raise response.data.body
        @response= JSON.parse(response.data.body)

      end
    end
    render "index"
  end
  def create
    

  end
end
