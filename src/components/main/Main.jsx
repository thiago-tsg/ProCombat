// styles
import '../../styles/main/Main.scss';

//components
import Destaque from './Destaque';
import EventosDestaque from './EventosDestaque';
import EmNumeros from './EmNumeros';
import Noticias from './Noticias';
import Patrocinadores from './Patrocinadores';

const Main = () => {
  return (
    <section className='cg-main'>
      <Destaque />
      <EventosDestaque />
      <EmNumeros />
      <Noticias />
      <Patrocinadores />
    </section>
  )
}

export default Main