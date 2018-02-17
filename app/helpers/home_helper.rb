module HomeHelper


  def js_framework(fw)
    if (fw == 'backbone')
      # return javascript_include_tag('backbonejs/home')
      return raw "<script src='//localhost:8080/js/backbone.js' type='text/javascript'></script>"
    else
      # return javascript_include_tag('canjs/home')
      return raw "<script src='//localhost:8080/js/canjs.js'></script>"
    end
  end

end
