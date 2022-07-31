import React from 'react';
import DocOneAccordion from '../DocOneAccordion/DocOneAccordion';

export default function DocAccordionsAll({ doc }) {
  return (
    <div>
      <DocOneAccordion name="experience" content={doc.Doc_Info.experience} />
      <DocOneAccordion name="profiles" content={doc.Profiles.map((el) => el.name)} />
      <DocOneAccordion name="categories" content={doc.Categories.map((el) => el.name)} />
      <DocOneAccordion name="price_list" content={doc.Price_lists} />
    </div>
  );
}
