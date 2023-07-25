import styles from "../layout/Images.module.css";
import InsaneButton from './insanenbutton';

const RecreatePastComponent = () => {
  return (
    <>
      <div className={`flex justify-center items-center min-w-full min-h-full ${styles.parent}`}>
        <div className={`flex justify-center items-center bg-no-repeat bg-cover bg-center fixed top-0 left-0 right-0 bottom-0  `} style={{ backgroundImage: 'url(/create.jpg)' }}>
          <div className="flex flex-col items-start p-20 bg-white bg-opacity-70">
            <div className="text-4xl font-bold mb-5">Let's recreate the past</div>
            <div className="text-2xl mb-20 min-w-[10px]">
              <p>Flashback assistant will help you create your past</p>
              <p>version</p>
              </div>
            <InsaneButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecreatePastComponent;
