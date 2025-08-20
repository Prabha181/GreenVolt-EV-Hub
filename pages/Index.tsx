export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
}
