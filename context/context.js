import indexPageContext from './indexPage';
import galeriaPageContext from './galleryPage';
import cardsPage from './cardsPage';
import cardsPrograma from './cardsPrograma';
import cardsPreguntas from './cardsPreguntas';

const pageContext = {
    "/index.html": indexPageContext,
    "/pages/gallery.html": galeriaPageContext,
    "/pages/nosotros.html": cardsPage,
    "/pages/programas.html": cardsPrograma,
    "/pages/preguntas.html": cardsPreguntas,
    
}

const globalContext = {
    "tittle": "ONG - MASEO"
}

const getContext = (contextKey) => {
    const _pageContext = pageContext[contextKey] || {};
    return Object.assign({}, globalContext, _pageContext);
}

export default getContext;