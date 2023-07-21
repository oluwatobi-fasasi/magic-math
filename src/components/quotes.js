import { useEffect, useState } from 'react';

function Quotes() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    const rawData = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=marriage',
          {
            headers: {
              'Content-Type': 'application/json',
              'X-API-key': 'LgO37qqgJKI555yev5bcsQ==feYBZkk2G964hlS1',
            },
          },
        );
        const json = await response.json();
        setQuotes(json);
      } catch (error) {
        setErrors(true);
      }
      setLoading(false);
    };
    rawData();
  }, []);

  if (loading) {
    return <div className="text-6xl text-center pt-8 text-orange-400">Loading Quotes.....</div>;
  } if (errors) {
    return <div>Error quote received</div>;
  } if (quotes) {
    return <div className="m-60 text-center text-4xl">{quotes[0].quote}</div>;
  }
}

export default Quotes;
