import { apple, bill, google} from '../assets';
import styles, {layout} from '../style';

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-index[5]'/>
        {/* Gradient starts */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[70%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* Gradient ends */}
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Easily Control your billing and invoicing<br className='sm:block hidden'/></h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Billing and invoicing can easily be easily managed
           within our app, accepting many different payment options. Manage your bills with ease of control.
          </p>
          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5
            cursor-pointer'/>
            <img src={google} alt="google_store" className='w-[128px] h-[42px] object-contain
            cursor-pointer'/>
          </div>
      </div>
    </section>
  )
}

export default Billing