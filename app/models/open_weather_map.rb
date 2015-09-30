class OpenWeatherMap
  include HTTParty
  base_uri "api.openweathermap.org"
  def initialize(city_name,country_code,unit,cnt)
    @options= {query:{q:city_name+","+country_code,units:unit,cnt:cnt}}
  end
  def data
    puts @options
    self.class.get("/data/2.5/forecast/daily",@options)
  end
end