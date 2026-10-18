import { jsPDF } from 'jspdf';
import portraitUrl from '../assets/me.png';
import resumeData from '../data/me.json';

// Layout adapted from the single-column date-rail approach in the MIT-licensed
// ATS-ready AltaCV template: https://github.com/isaacbmichael/ats-ready-altacv-template
const page = { width: 210, height: 297, margin: 16, bottom: 284 };
const colors = {
  accent: [190, 83, 50],
  ink: [24, 39, 53],
  muted: [88, 105, 116],
  rule: [220, 225, 228]
};

const normaliseText = (value) => value.replace(/[–—]/g, '-');

const loadImage = (src) => new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = () => resolve(image);
  image.onerror = reject;
  image.src = src;
});

export async function generateResumePdf() {
  const pdf = new jsPDF({ format: 'a4', unit: 'mm', compress: true });
  const { contact, about, experiences, skills, education, languages } = resumeData;
  const portrait = await loadImage(portraitUrl.src);
  const contentX = 51;
  const contentWidth = page.width - page.margin - contentX;
  let y = 0;

  const setText = (size, style = 'normal', color = colors.ink) => {
    pdf.setFont('helvetica', style);
    pdf.setFontSize(size);
    pdf.setTextColor(...color);
  };

  const drawContactIcon = (type, x, y) => {
    pdf.setDrawColor(...colors.muted);
    pdf.setLineWidth(0.3);

    if (type === 'email') {
      pdf.rect(x, y, 3, 2.2);
      pdf.line(x, y, x + 1.5, y + 1.2);
      pdf.line(x + 1.5, y + 1.2, x + 3, y);
    } else if (type === 'phone') {
      pdf.roundedRect(x + 0.7, y - 0.4, 1.6, 3.1, 0.25, 0.25, 'S');
      pdf.line(x + 1.15, y + 2.1, x + 1.85, y + 2.1);
    } else if (type === 'linkedin') {
      pdf.setFillColor(...colors.muted);
      pdf.roundedRect(x, y - 0.2, 3, 3, 0.35, 0.35, 'F');
      setText(4, 'bold', [255, 255, 255]);
      pdf.text('in', x + 1.5, y + 2.05, { align: 'center' });
    } else {
      pdf.circle(x + 1.5, y + 1.25, 1.45, 'S');
      pdf.line(x + 0.15, y + 1.25, x + 2.85, y + 1.25);
      pdf.line(x + 1.5, y - 0.2, x + 1.5, y + 2.7);
    }
  };

  const drawPageHeader = (continued = false) => {
    pdf.setFillColor(...colors.accent);
    pdf.rect(0, 0, page.width, 5, 'F');
    setText(continued ? 11 : 21, 'bold');
    pdf.text(contact.name, page.margin, continued ? 17 : 21);
    setText(continued ? 8 : 10, 'normal', colors.muted);
    pdf.text(continued ? 'Senior Backend Engineer | Experience continued' : contact.tagline, page.margin, continued ? 22 : 28);

    if (!continued) {
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(169, 9, 26, 26, 1.5, 1.5, 'F');
      pdf.addImage(portrait, 'PNG', 170, 10, 24, 24);
      const contactItems = [
        { type: 'email', text: contact.email },
        { type: 'phone', text: contact.phone },
        { type: 'linkedin', text: contact.linkedin.text },
        { type: 'website', text: contact.web.text }
      ];
      let contactX = page.margin;
      setText(10, 'normal', colors.muted);
      contactItems.forEach((item, index) => {
        drawContactIcon(item.type, contactX, 33);
        setText(10, 'normal', colors.muted);
        contactX += 4.3;
        pdf.text(item.text, contactX, 36);
        contactX += pdf.getTextWidth(item.text);
        if (index < contactItems.length - 1) {
          pdf.text(' | ', contactX, 36);
          contactX += pdf.getTextWidth(' | ');
        }
      });
      y = 52;
    } else {
      y = 30;
    }

    pdf.setDrawColor(...colors.rule);
    pdf.line(page.margin, y - 4, page.width - page.margin, y - 4);
  };

  const addPage = () => {
    pdf.addPage();
    drawPageHeader(true);
  };

  const ensureSpace = (height) => {
    if (y + height > page.bottom) addPage();
  };

  const writeWrapped = (text, x, width, size, style = 'normal', lineHeight = 4.5, color = colors.ink) => {
    setText(size, style, color);
    const lines = pdf.splitTextToSize(normaliseText(text), width);
    for (const line of lines) {
      ensureSpace(lineHeight);
      pdf.text(line, x, y);
      y += lineHeight;
    }
  };

  const writeBullet = (text) => {
    setText(8.6, 'normal', colors.ink);
    const lines = pdf.splitTextToSize(normaliseText(text), contentWidth - 4);
    for (const [index, line] of lines.entries()) {
      ensureSpace(3.85);
      pdf.text(index === 0 ? '-' : ' ', contentX, y);
      pdf.text(line, contentX + 4, y);
      y += 3.85;
    }
    y += 0.8;
  };

  const section = (title) => {
    ensureSpace(11);
    pdf.setFillColor(...colors.accent);
    pdf.rect(page.margin, y - 3.5, 3, 6, 'F');
    setText(10, 'bold', colors.ink);
    pdf.text(title, page.margin + 6, y + 1);
    pdf.setDrawColor(...colors.rule);
    pdf.line(page.margin + 32, y, page.width - page.margin, y);
    y += 8;
  };

  const experience = ({ job_title, time, company, technologies, details }) => {
    ensureSpace(18);
    setText(8, 'bold', colors.accent);
    const period = pdf.splitTextToSize(normaliseText(time), contentX - page.margin - 4);
    pdf.text(period, page.margin, y);
    writeWrapped(job_title, contentX, contentWidth, 11, 'bold', 4.8);
    writeWrapped(company, contentX, contentWidth, 9, 'normal', 4.2, colors.muted);
    y += 1.4;

    for (const responsibility of details.responsibilities) {
      setText(8.7);
      const headHeight = responsibility.head
        ? pdf.splitTextToSize(normaliseText(responsibility.head), contentWidth).length * 4
        : 0;
      const bulletsHeight = responsibility.elements.reduce(
        (height, element) => height + pdf.splitTextToSize(normaliseText(element), contentWidth - 4).length * 3.85 + 0.8,
        0
      );
      ensureSpace(headHeight + bulletsHeight + 2);

      if (responsibility.head) {
        writeWrapped(responsibility.head, contentX, contentWidth, 8.7, 'normal', 4, colors.ink);
        y += 0.8;
      }
      responsibility.elements.forEach(writeBullet);
    }

    const technologyLines = pdf.splitTextToSize(normaliseText(technologies.join(' | ')), contentWidth);
    ensureSpace(1.5 + 4 + 3.8 + technologyLines.length * 3.6 + 2);
    y += 1.5;
    setText(7.6, 'bold', colors.accent);
    pdf.text('TECHNOLOGIES', contentX, y);
    y += 3.8;
    setText(8, 'normal', colors.muted);
    technologyLines.forEach((line) => {
      pdf.text(line, contentX, y);
      y += 3.6;
    });
    y += 2;
  };

  drawPageHeader();

  section('PROFILE');
  writeWrapped(about.content, page.margin, page.width - page.margin * 2, 9.5, 'normal', 4.8, colors.muted);
  y += 4;

  section('EXPERIENCE');
  experiences.forEach(experience);

  section('CORE SKILLS');
  skills.forEach((skill) => {
    ensureSpace(6);
    setText(8.8, 'bold');
    pdf.text(skill.name, page.margin, y);
    setText(8.8, 'bold', colors.accent);
    pdf.text(`${skill.proficiency}%`, page.width - page.margin, y, { align: 'right' });
    pdf.setDrawColor(...colors.rule);
    pdf.line(page.margin, y + 1.5, page.width - page.margin, y + 1.5);
    y += 5;
  });
  y += 3;

  section('EDUCATION AND LANGUAGES');
  education.forEach((item) => {
    writeWrapped(`${item.degree} | ${item.university} | ${item.time}`, page.margin, page.width - page.margin * 2, 8.8, 'normal', 4.2);
  });
  writeWrapped(languages.map((item) => `${item.language} (${item.proficiency})`).join(' | '), page.margin, page.width - page.margin * 2, 8.8, 'normal', 4.2, colors.muted);

  const pages = pdf.getNumberOfPages();
  for (let currentPage = 1; currentPage <= pages; currentPage += 1) {
    pdf.setPage(currentPage);
    setText(7.5, 'normal', colors.muted);
    pdf.text(`${contact.web.text} | ${currentPage} / ${pages}`, page.width - page.margin, 289, { align: 'right' });
  }

  pdf.save('alvaro-gutierrez-lopez-resume.pdf');
}
