export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Redirect van .pages.dev naar .nl
    if (url.hostname === 'oranjehout.pages.dev') {
      return Response.redirect('https://oranje-hout.nl' + url.pathname + url.search, 301);
    }
    
    // Normale requests: serve de website
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return new Response('Error loading page', { status: 500 });
    }
  }
};
