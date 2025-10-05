export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Als iemand oranjehout.pages.dev bezoekt, redirect naar oranje-hout.nl
    if (url.hostname === 'oranjehout.pages.dev') {
      return Response.redirect('https://oranje-hout.nl' + url.pathname + url.search, 301);
    }
    
    // Voor alle andere verzoeken (inclusief oranje-hout.nl): haal de assets op
    return await env.ASSETS.fetch(request);
  }
};
