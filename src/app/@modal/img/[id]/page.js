import FullPageImageView from "../../../components/full-page-image";
import { Modal } from "./modal";
export default function PhotoModal({ params }) {
  const idasNumber = Number(params.id);
  // console.log(params);
  return (
    // <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
    <Modal>
      <FullPageImageView id={idasNumber} />;
    </Modal>
    // </div>
  );
}
