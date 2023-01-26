import { Container } from "./Container";

export function Divider(props: React.PropsWithChildren<{}>) {
  return (
    <Container>
      <div className="bg-white py-5">{props.children}</div>
    </Container>
  );
}
