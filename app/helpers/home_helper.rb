module HomeHelper


  def js_framework(fw)
    if (fw == 'backbone')
      return javascript_include_tag('backbonejs/home')
    else
      return javascript_include_tag('canjs/home')
    end
  end

end
