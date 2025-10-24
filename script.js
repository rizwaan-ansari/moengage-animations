gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
});

function setupSplitTextTitle(titleElement, textBeforeClass, logoClass, textAfterClass) {
    const textBeforeSpan = titleElement.querySelector(textBeforeClass);
    const logoSpan = titleElement.querySelector(logoClass);
    const textAfterSpan = titleElement.querySelector(textAfterClass);

    const splitTextBefore = new SplitText(textBeforeSpan, { type: "chars" });
    const splitTextAfter = new SplitText(textAfterSpan, { type: "chars" });

    gsap.set(splitTextBefore.chars, { opacity: 0, x: -10 });
    gsap.set(logoSpan, { opacity: 0, x: -10, scale: 0.95 });
    gsap.set(splitTextAfter.chars, { opacity: 0, x: -10 });

    return {
        splitTextBefore,
        splitTextAfter,
        logoSpan,
        textBeforeSpan,
        textAfterSpan
    };
}

function createTypingAnimation(timeline, splitData, startTime = 0) {
    timeline.to(splitData.splitTextBefore.chars, 
        { 
            opacity: 1, 
            x: 0, 
            duration: 0.2, 
            stagger: 0.02,
            ease: "power1.out" 
        },
        startTime
    )
    .to(splitData.logoSpan, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.15,
        ease: "power1.out"
    }, "-=0.1")
    .to(splitData.splitTextAfter.chars, {
        opacity: 1,
        x: 0,
        duration: 0.2,
        stagger: 0.02,
        ease: "power1.out"
    }, "-=0.05");
    
    return timeline;
}

function createTypingExitAnimation(timeline, splitData, startTime) {
    timeline.to(
        [splitData.splitTextBefore.chars, splitData.logoSpan, splitData.splitTextAfter.chars], 
        {
            opacity: 0,
            x: 10,
            duration: 0.2,
            ease: "power1.in",
            stagger: 0.01
        }, 
        startTime
    );
    
    return timeline;
}

function initScrollAnimations() {
    const merlinAiContainerTrigger = document.querySelector('.merlin-ai-card-animation-container-trigger');
    const merlinAiTitleOne = document.querySelector('.merlin-ai-card-animation-title-one');
    const merlinAiTitleTwo = document.querySelector('.merlin-ai-card-animation-title-two');
    const merlinAiColumnsSetOne = document.querySelectorAll('.merlin-ai-card-animation-column-1');
    const merlinAiColumnsSetTwo = document.querySelectorAll('.merlin-ai-card-animation-column-2');
    const merlinAiColumnsSetThree = document.querySelectorAll('.merlin-ai-card-animation-column-3');
    const merlinAiLeftColumn = document.querySelector('.merlin-ai-grid-left-column');
    const merlinAiTopRight = document.querySelector('.merlin-ai-grid-top-right');
    const merlinAiBottomRight = document.querySelector('.merlin-ai-grid-bottom-right');
    const merlinAiBottomSpanning = document.querySelector('.merlin-ai-grid-bottom-spanning');
    
    const merlinAiSecondSetElements = [merlinAiLeftColumn, merlinAiTopRight, merlinAiBottomRight, merlinAiBottomSpanning];

    const merlinAiTitleOneSplitData = setupSplitTextTitle(
        merlinAiTitleOne,
        '.merlin-ai-title-one-text-before',
        '.merlin-ai-title-logo-one',
        '.merlin-ai-title-one-text-after'
    );

    const merlinAiTitleTwoSplitData = setupSplitTextTitle(
        merlinAiTitleTwo,
        '.merlin-ai-title-two-text-before',
        '.merlin-ai-title-logo-two',
        '.merlin-ai-title-two-text-after'
    );

    
    gsap.set(merlinAiTitleOne, { opacity: 1 });
    gsap.set(merlinAiTitleTwo, { opacity: 1 });
    gsap.set([merlinAiColumnsSetOne, merlinAiColumnsSetTwo, merlinAiColumnsSetThree], { y: 200, opacity: 0 });
    gsap.set(merlinAiSecondSetElements, { y: 200, opacity: 0 });
    gsap.set('.merlin-ai-card-border-highlight', { opacity: 0 });
    gsap.set('.merlin-ai-card-bg-blur', { opacity: 0, scale: 0, transformOrigin: "right center" });
    
    gsap.set(merlinAiContainerTrigger, { 
        maskImage: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.5) 85%, rgba(255,255,255,0) 100%)"
    });
    

    const merlinAiFirstSetRow1 = [
        document.querySelector('.merlin-ai-card-1'),
        document.querySelector('.merlin-ai-card-3'),
        document.querySelector('.merlin-ai-card-5') 
    ].filter(card => card !== null);
    
    const merlinAiFirstSetRow2 = [
        document.querySelector('.merlin-ai-card-2'),
        document.querySelector('.merlin-ai-card-4'),
        document.querySelector('.merlin-ai-card-6') 
    ].filter(card => card !== null);
    

    const merlinAiColumnsSetOneCards = [...merlinAiFirstSetRow1, ...merlinAiFirstSetRow2]; 
    
    const merlinAiColumnsSetTwoCards = [
        document.querySelector('.merlin-ai-card-7'),
        document.querySelector('.merlin-ai-card-8'),
        document.querySelector('.merlin-ai-card-9'),
        document.querySelector('.merlin-ai-card-10')
    ].filter(card => card !== null); 
    const animationTimeline = gsap.timeline({ repeat: 1, paused: true });
    
    animationTimeline.set([...merlinAiColumnsSetOneCards, ...merlinAiColumnsSetTwoCards], {
        scale: 1
    }, 0);
    
    animationTimeline.set('.merlin-ai-card-border-highlight', {
        opacity: 0
    }, 0);
    
    animationTimeline.set('.merlin-ai-card-bg-blur', {
        opacity: 0,
        scale: 0
    }, 0);

    createTypingAnimation(animationTimeline, merlinAiTitleOneSplitData, 0);
    animationTimeline.to([merlinAiColumnsSetOne, merlinAiColumnsSetTwo, merlinAiColumnsSetThree], {
        y: 0, 
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=0.2")
    
    .to(merlinAiContainerTrigger, {
        maskImage: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%)",
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.3");
    


    merlinAiFirstSetRow1.forEach((card, index) => {
        const highlightBorders = card.querySelectorAll('.merlin-ai-card-border-highlight');
        const blurEffects = card.querySelectorAll('.merlin-ai-card-bg-blur');
        
        const cardStartPosition = "+=" + (index === 0 ? 0.1 : 0.05);
        
        animationTimeline.to(card, {
            transformOrigin: "top center",
            scale: 1.08,
            zIndex: 1000,
            duration: 0.2,
            ease: "sine.inOut"
        }, cardStartPosition)
        .to(highlightBorders, {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        }, "<")
        .to(blurEffects, {
            opacity: 1,
            scale: 1.5,
            duration: 0.2,
            ease: "power2.out"
        }, "<")
        
        .to(card, {
            scale: 1,
            zIndex: 1,
            duration: 0.2,
            ease: "power2.in"
        }, "+=0.2")
        .to(highlightBorders, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in"
        }, "<")
        .to(blurEffects, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in"
        }, "<-0.2");
    });
    

    merlinAiFirstSetRow2.forEach((card, index) => {
        const highlightBorders = card.querySelectorAll('.merlin-ai-card-border-highlight');
        const blurEffects = card.querySelectorAll('.merlin-ai-card-bg-blur');
        
        const cardStartPosition = "+=" + (index === 0 ? 0.2 : 0.05);
        
        animationTimeline.to(card, {
            transformOrigin: "bottom center",
            scale: 1.08,
            zIndex: 1000,
            duration: 0.2,
            ease: "sine.inOut"
        }, cardStartPosition)
        .to(highlightBorders, {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        }, "<")
        .to(blurEffects, {
            opacity: 1,
            scale: 1.02,
            duration: 0.2,
            ease: "power2.out"
        }, "<")
        
        .to(card, {
            scale: 1,
            zIndex: 1,
            duration: 0.2,
            ease: "power2.in"
        }, "+=0.2")
        .to(highlightBorders, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in"
        }, "<")
        .to(blurEffects, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in"
        }, "<-0.2");
    });
    
    animationTimeline.to({}, { duration: 0.5 })
    .to([merlinAiColumnsSetOne, merlinAiColumnsSetTwo, merlinAiColumnsSetThree], {
        y: 200,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.in"
    });
    
    createTypingExitAnimation(animationTimeline, merlinAiTitleOneSplitData, "-=0.4");
    
    animationTimeline.to(merlinAiContainerTrigger, {
        maskImage: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.5) 85%, rgba(255,255,255,0) 100%)",
        duration: 0.3,
        ease: "power2.out"
    });
    
    createTypingAnimation(animationTimeline, merlinAiTitleTwoSplitData, "+=0.2");
    animationTimeline.to(merlinAiSecondSetElements, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=0.5")
    .to(merlinAiContainerTrigger, {
        maskImage: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%)",
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.6");
    
    merlinAiColumnsSetTwoCards.forEach((card, index) => {
        const highlightBorders = card.querySelectorAll('.merlin-ai-card-border-highlight');
        const blurEffects = card.querySelectorAll('.merlin-ai-card-bg-blur');
        
        const cardStartPosition = "+=" + (index === 0 ? 0.1 : 0.05);
    
        animationTimeline.to(card, {
            transformOrigin: "bottom center",
            scale: 1.08,
            zIndex: 50,
            duration: 0.2,
            ease: "sine.inOut"
        }, cardStartPosition)
        .to(highlightBorders, {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        }, "<")
        .to(blurEffects, {
            opacity: 1,
            scale: 1.5,
            duration: 0.2,
            ease: "power2.out"
        }, "<")
        
        .to(card, {
            scale: 1,
            zIndex: 1,
            duration: 0.2,
            ease: "power2.in"
        }, "+=0.2")
        .to(highlightBorders, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in"
        }, "<")
        .to(blurEffects, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in"
        }, "<-0.2");
    });

    animationTimeline.to({}, { duration: 0.5 })
    .to(merlinAiSecondSetElements, {
        y: 200,
        opacity: 0,
        duration: 0.5,
        stagger: {
            amount: 0.3,
            from: "end"
        },
        ease: "power2.in"
    });
    
    createTypingExitAnimation(animationTimeline, merlinAiTitleTwoSplitData, "-=0.6");
    
    animationTimeline.to(merlinAiContainerTrigger, {
        maskImage: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.5) 85%, rgba(255,255,255,0) 100%)",
        duration: 0.3,
        ease: "power2.out"
    });

    ScrollTrigger.create({
        trigger: merlinAiContainerTrigger,
        start: "top 20%",
        end: "bottom 20%",
        onEnter: () => animationTimeline.play(),
        onEnterBack: () => animationTimeline.play(),
        onLeaveBack: () => animationTimeline.pause()
    });
}