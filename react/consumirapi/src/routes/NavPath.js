import { useNavigate, useLocation } from 'react-router-dom';

export default function NavPath(e, path) {
  const navigate = useNavigate();
  const location = useLocation();
  e.preventDefault();
  navigate(path, { state: location, replace: true });
}
