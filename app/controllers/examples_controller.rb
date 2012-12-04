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

  # Permite que se escolha o layout conforme a action chamada
  def get_layout
    case action_name
    when "index", "hero", "fluid", "starter_template"
      "application"
    else
      "application"
    end
  end
end
