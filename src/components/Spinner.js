import { MutatingDots } from "react-loader-spinner";

export default function Spinner() {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#25292e"
      secondaryColor="#464d55"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
