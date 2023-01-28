import { Container } from "./Container";

export function Divider(props: React.PropsWithChildren<{}>) {
  return (
    <Container>
      <div className="bg-white py-3">{props.children}</div>
    </Container>
  );
}
