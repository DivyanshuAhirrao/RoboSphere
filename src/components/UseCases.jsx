import styled from 'styled-components';

const UseCasesContainer = styled.section`
  padding: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const UseCases = () => {
  const useCases = [
    { title: 'Industrial Robots', description: 'Automating manufacturing processes.' },
    { title: 'Medical Robots', description: 'Assisting in surgeries with precision.' },
    { title: 'Service Robots', description: 'Helping with household tasks.' },
  ];

  return (
    <UseCasesContainer>
      {useCases.map((caseItem, index) => (
        <Card key={index}>
          <h3>{caseItem.title}</h3>
          <p>{caseItem.description}</p>
        </Card>
      ))}
    </UseCasesContainer>
  );
};

export default UseCases;
