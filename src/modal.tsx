import { useParams, useNavigate } from "react-router-dom";

export function Modal() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <dialog open>
      <p>esse é o modal com ID: {id}</p>
      <button onClick={() => navigate('/page')}>
        Close Modal
      </button>
    </dialog>
  )
}
