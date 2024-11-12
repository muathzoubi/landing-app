import { useEffect, useState } from 'react';

const Icon = (props: { iconName: string }) => {
  const [iconObj, setIconObj] = useState(<></>);
  const handleIconObj = (name: string) => {
    let img = <img src={`./${name}.png`} alt={name} width={25} height={25} />;
    setIconObj(img);
  };
  useEffect(() => {
    if (props.iconName) {
      return handleIconObj(props.iconName);
    }
  }, []);
  return <>{iconObj}</>;
};
export default Icon;
