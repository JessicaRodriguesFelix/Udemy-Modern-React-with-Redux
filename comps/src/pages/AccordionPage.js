import { Accordion } from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "text1",
      context: "Can I use react?",
    },
    {
      id: 2,
      label: "text2",
      context: "Can I use JS?",
    },
    {
      id: 3,
      label: "text3",
      context: "Can I use CSS?",
    },
  ];

  return <Accordion items={items} />;
}
export default AccordionPage;
