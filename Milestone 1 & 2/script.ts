interface SkillAnimation {
    element: HTMLElement;
    targetWidth: string;
}

const skillButton = document.getElementById('button-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;
const skillLevels = document.querySelectorAll('.skill-level') as NodeListOf<HTMLElement>;

// Initialize skill bars
const initializeSkillBars = () => {
    skillLevels.forEach((skillLevel) => {
        const targetWidth = skillLevel.style.width;
        skillLevel.style.width = '0';
        
        // Trigger animation after a small delay
        setTimeout(() => {
            skillLevel.style.width = targetWidth;
        }, 200);
    });
};

// Toggle skills section with animation
if (skillButton && skillsSection) {
    let isVisible = true;
    
    skillButton.addEventListener('click', () => {
        if (isVisible) {
            skillsSection.style.opacity = '0';
            setTimeout(() => {
                skillsSection.style.display = 'none';
            }, 300);
            skillButton.textContent = 'Show Skills';
        } else {
            skillsSection.style.display = 'block';
            setTimeout(() => {
                skillsSection.style.opacity = '1';
                initializeSkillBars();
            }, 10);
            skillButton.textContent = 'Hide Skills';
        }
        isVisible = !isVisible;
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeSkillBars();
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});