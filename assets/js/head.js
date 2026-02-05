(function ($) {
    $(function () {
        const pageTitle = "Modern Product Launch - Showcase Your Product with a Sleek Landing Page";
        const pageDescription = "Modern Product Launch is a sleek, responsive landing page designed to showcase your product's key features and benefits. With a clean layout, engaging visuals, and clear calls to action, this template is perfect for capturing your audience's attention and driving conversions.";
        const siteName = "Modern Product Launch";
        
        // Page description
        $("meta[name='description']").attr("content", pageDescription);

        // Canonical URL
        $("link[rel='canonical']").attr("href", window.location.href);

        // Meta data        
        $("meta[property='og:title']").attr("content", pageTitle);
        $("meta[property='og:url']").attr("content", window.location.href);
        $("meta[property='og:description']").attr("content", pageDescription);
        $("meta[property='og:site_name']").attr("content", siteName);
        $("meta[property='og:image']").attr("content", window.location.origin + "/assets/meta/ogp.jpg");
      
        // Twiiter card
        $("meta[name='twitter:card']").attr("content", window.location.origin + "/assets/meta/ogp.jpg");
        $("meta[name='twitter:title']").attr("content", pageTitle);
        $("meta[name='twitter:description']").attr("content", pageDescription);
        $("meta[name='twitter:image']").attr("content", window.location.origin + "/assets/meta/ogp.jpg");
    })
})(jQuery.noConflict());
