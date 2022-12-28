import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .filter((i) => (i))
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
              >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 0.5em;
  margin: 0;
  width : 0.5em;
  background: #7c7979;
  color: white;
  font-size: 1rem;

  &:hover {
    background: #4d4d4d;
    cursor: pointer;
    transform: translateY(-2px);
  }

`;

export default Pagination;