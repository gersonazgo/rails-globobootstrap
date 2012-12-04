class ExamplesController < ApplicationController
  layout :get_layout

  def index

  end

  def hero

  end

  def fluid

  end

  def starter_template

  end

  def get_layout
    case action_name
    when "starter_template"
      "starter_template"
    when "hero"
      "hero"
    when "fluid"
      "fluid"
    else
      "application"
    end
  end
end
