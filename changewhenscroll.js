<script>
jQuery(document).ready(function() {
  var menu = jQuery(".menu");
  var menunavbar = jQuery(".menu-navbar");
  var menuItems = jQuery(".menu .elementor-item");
  var transparentClass = "transparent-menu";
  var scrolledClass = "scrolled-menu";
  var menutransparentClass = "transparent-menu-navbar";
  var menuscrolledClass = "scrolled-menu-navbar";
  var scrollThreshold = 70;

  // Store the original and scrolled images
  var originalImage = "wp-content/uploads/2023/03/lienteh-logo.png";
  var scrolledImage = "wp-content/uploads/2023/03/Asset-1-2.png";
  
  // Get the image element
  var imageElement = jQuery(".menu-logo img");

  jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();

    if (scroll > scrollThreshold) {
      menu.addClass(scrolledClass).removeClass(transparentClass);
      menunavbar.addClass(menuscrolledClass).removeClass(menutransparentClass);
      menuItems.css("color", "white");
      
      // Change the image source to the scrolled image
        imageElement.attr('src', scrolledImage);
      imageElement.attr('srcset', scrolledImage + ' 500w, ' + scrolledImage + ' 300w, ' + scrolledImage + ' 200w');
   
    } else {
      menu.removeClass(scrolledClass).addClass(transparentClass);
      menunavbar.removeClass(menuscrolledClass).addClass(menutransparentClass);
      menuItems.css("color", "black");
      
      // Change the image source back to the original image
        imageElement.attr('src', originalImage);
      imageElement.attr('srcset', originalImage + ' 500w, ' + originalImage + ' 300w, ' + originalImage + ' 200w');
    
    }
  });
});

</script>
