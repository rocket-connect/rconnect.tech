import { Container } from "./Container";

export function Divider(props: React.PropsWithChildren<{}>) {
  return (
    <Container>
      <div className="bg-white py-10">{props.children}</div>
    </Container>
  );
}
