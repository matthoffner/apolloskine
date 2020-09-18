export default (title, content) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${title}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};
