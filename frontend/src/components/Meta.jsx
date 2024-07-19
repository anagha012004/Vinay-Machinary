import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Vinar Machinary Stores',
  description: 'We sell the best products for cheap',
  keywords: 'machinary, buy machinary, cheap machinary',
};

export default Meta;