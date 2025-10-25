document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(SplitText);
    
    const designerCursor = document.getElementById('designer-cursor');
    const designerInputContainer = document.querySelector('.designer-input-container');
    const designerInputText = document.querySelector('.designer-input-text');
    const designerInputPlaceholder = document.querySelector('.designer-input-text-placeholder');
    const designerSendButton = document.querySelector('.designer-send-button');
    const designerInputGreenGradient = document.querySelector('.designer-input-gradient-green');
    const designerInputWhiteGradient = document.querySelector('.copywriter-input-gradient-white');
    const designerSendButtonIcon = document.querySelector('.designer-send-button-icon');
    const designerLoadingSpinner = document.querySelector('.designer-button-input-loader');
    const designerInputGroupTitle = document.querySelector('.designer-input-group-title');
    const designerFirstFrameTopPanel = document.querySelector('.designer-first-frame-top-panel');
    const designerPanelBox1 = document.querySelector('.designer-panel-box-1');
    const designerPanelBox2 = document.querySelector('.designer-panel-box-2');
    const designerSecondFrameTopPanel = document.querySelector('.designer-second-frame-top-panel');
    const designerShareIcon = document.querySelector('.designer-share-icon');
    const designerSecondFrameTopPanelTitle = document.querySelector('.designer-second-frame-top-panel-title');
    const designerBottomButtonsGroup = document.querySelector('.designer-bottom-buttons-group');
    const designerImageFinalOne = document.querySelector('.designer-image-final-one');
    const designerImageClip = document.querySelector('.designer-image-clip');
    const designerImageFinalOneBlur = document.querySelector('.designer-image-final-one-blur');
    const designerImageBlurClip = document.querySelector('.designer-image-blur-clip');
    const designerImageLoadingIcon = document.querySelector('.designer-image-loading-icon');
    const designerRegenerateButton = document.querySelector('.designer-regenerate-button');
    const designerImageFinalTwo = document.querySelector('.designer-image-final-two');
    const designerImageFinalTwoBlur = document.querySelector('.designer-image-final-two-blur');
    const designerImageTwoClip = document.querySelector('.designer-image-final-two .designer-image-clip');
    const designerImageTwoBlurClip = document.querySelector('.designer-image-final-two-blur .designer-image-blur-clip');
    const designerImageTwoLoadingIcon = document.querySelector('.designer-image-final-two-blur .designer-image-loading-icon');
    const designerSaveButton = document.querySelector('.designer-save-button');
    const designerPanelBgBlur = document.querySelector('img[alt="designer-panel-bg-blur"]').parentElement;
    let designerSplitText;
    let designerSecondFrameTopPanelTitleSplitText;
    
    function maintainInputWidth() {
        const inputContainer = document.querySelector('.designer-input-container');
        const sendButton = document.querySelector('.designer-send-button');
        
        if (inputContainer && sendButton) {
            const containerRect = inputContainer.getBoundingClientRect();
            const buttonRect = sendButton.getBoundingClientRect();
            const gap = 24;
            const minWidth = buttonRect.left - containerRect.left - gap;
            if (minWidth > 0) {
                inputContainer.style.minWidth = `${minWidth}px`;
            }
        }
    }
    window.addEventListener('resize', maintainInputWidth);
    maintainInputWidth();
    setTimeout(maintainInputWidth, 100);
    
    if (designerInputText) {
        designerSplitText = new SplitText(designerInputText, { type: "words,chars" });
        gsap.set(designerSplitText.chars, { display: "none" });
    }
    if (designerSecondFrameTopPanelTitle) {
        designerSecondFrameTopPanelTitleSplitText = new SplitText(designerSecondFrameTopPanelTitle, { type: "words,chars" });
        gsap.set(designerSecondFrameTopPanelTitleSplitText.chars, { opacity: 0, visibility: "hidden" });
        gsap.set(designerSecondFrameTopPanelTitleSplitText.words, { marginRight: "0.25em" });
    }
    
    gsap.set(designerCursor, { opacity: 0, scale: 0.8 });

    const timeline = gsap.timeline({  repeatDelay: 2, });

    timeline
        .set(designerCursor, { opacity: 0, scale: 0.8, y: 200 })
        .set(designerInputPlaceholder, { opacity: 1 })
        .set(designerSplitText.chars, { display: "none" })
        .set(designerSecondFrameTopPanelTitleSplitText.chars, { opacity: 0, visibility: "hidden" })
        .set(designerSendButton, { scale: 1 })
        .set(designerInputGreenGradient, { opacity: 0 })
        .set(designerInputWhiteGradient, { opacity: 1 })
        .set(designerSendButtonIcon, { opacity: 1, scale: 1 })
        .set(designerLoadingSpinner, { opacity: 0, scale: 0.75 })
        .set(designerInputGroupTitle, { opacity: 1 })
        .set(designerSecondFrameTopPanel, { opacity: 0 })
        .set(designerBottomButtonsGroup, { translateY: 100, opacity: 0 })
        .set(designerImageClip, { clipPath: "inset(0% 0% 0% 0%)"})
        .set(designerImageBlurClip, { clipPath: "inset(0% 0% 0% 0%)"})
        .set(designerImageLoadingIcon, { opacity: 0, scale: 0.8 })
        .set(designerImageFinalTwo, { opacity: 0 })
        .set(designerImageFinalTwoBlur, { opacity: 0 })
        .set(designerImageTwoClip, { clipPath: "inset(0% 0% 0% 0%)"})
        .set(designerImageTwoBlurClip, { clipPath: "inset(0% 0% 0% 0%)"})
        .set(designerImageTwoLoadingIcon, { opacity: 0, scale: 0.8 })
        .to(designerCursor, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power2.out" })
        
        .to(designerInputWhiteGradient, { 
            opacity: 0, 
            duration: 0.6, 
            ease: "power2.out" 
        }, "-=0.3")
        
        .to(designerCursor, { scale: 1.2, duration: 0.1, ease: "power2.out" })
        .to(designerCursor, { scale: 0.8, duration: 0.1, ease: "power2.in" })
        
        .to(designerInputGreenGradient, { 
            opacity: 0.85, 
            duration: 0.5, 
            ease: "power2.out" 
        }, "-=0.1")
        .to({}, { duration: 0.1 })
        
        .to(designerInputPlaceholder, { 
            opacity: 0, 
            duration: 0.4, 
            ease: "power2.out" 
        })
        .to(designerSplitText.chars, {
            display: "inline-block",
            duration: 0.01,
            stagger: 0.03,
            ease: "none"
        })
        .to(designerCursor, {
            xPercent: window?.innerWidth > 399 ? 360 : 280,
            y: 10,
            duration: 0.8,
            ease: "power2.inOut"
        })
        .to(designerCursor, {
            scale: 1.3,
            duration: 0.15,
            ease: "power2.out"
        })
        .to(designerCursor, {
            scale: 1,
            duration: 0.15,
            ease: "power2.in"
        })
        .to(designerSendButton, {
            scale: 0.95,
            duration: 0.15,
            ease: "power2.out"
        }, "-=0.15")
        .to(designerSendButton, {
            scale: 1,
            duration: 0.1,
            ease: "power2.in"
        })
        
        .to(designerSendButtonIcon, {
            opacity: 0,
            scale: 0.5,
            duration: 0.3,
            ease: "power2.out"
        })
        .to(designerLoadingSpinner, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        }, "-=0.2")
        .to([designerInputGroupTitle, designerFirstFrameTopPanel, designerInputContainer], {
            x: -400,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        })
        .to(designerPanelBox2, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.5")
        .to(designerSendButton, {
            x: 0,
            width: "88%",
            height: "80%",
            borderRadius: "4px",
            duration: 0.8,
            backgroundColor: "rgba(17, 9, 34, 0)",
            ease: "power2.inOut",
            onUpdate: maintainInputWidth
        }, "-=0.3")
        .to(designerCursor, {
            opacity: 0,
            duration: 0.1,
            ease: "power2.out"
        })
        .to(designerSendButton, {
            height: "68%",
            bottom: 80,
            duration: 0.8,
            ease: "power2.inOut",
            onUpdate: maintainInputWidth
        }, "-=0.3")
        .to(designerSendButtonIcon, {
            opacity: 0,
            scale: 0.5,
            duration: 0.3,
            ease: "power2.out"
        })
        .to(designerLoadingSpinner, {
            opacity: 0,
            scale: 0.75,
            duration: 0.3,
            ease: "power2.in"
        })
        .to(designerSecondFrameTopPanel, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        })
        // .to(designerShareIcon, {    
        //     opacity: 1,
        //     duration: 0.5,
        //     ease: "power2.out"
        // })
        .to(designerSecondFrameTopPanelTitleSplitText.chars, {
            opacity: 1,
            visibility: "visible",
            duration: 0.01,
            stagger: 0.03,
            ease: "none"
        })
        .to(designerBottomButtonsGroup, {
            translateY: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.6")
        .to(designerImageFinalOneBlur, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.4")
        .to(designerPanelBgBlur, {
            zIndex: 0,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.3")
        .to(designerImageFinalOne, {
            opacity: 1,
            duration: 0.1,
            ease: "none"
        }, "-=0.3")
        .to(designerImageLoadingIcon, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        }, "-=0.1")
        .to(designerImageLoadingIcon, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1
        })
        .to(designerImageLoadingIcon, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out"
        }, "-=0.2")
        .to(designerImageBlurClip, {
            clipPath: "inset(50% 0% 0% 0%)",
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.1")
        .to(designerImageBlurClip, {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 1.5,
            ease: "power3.out"
        })
        .to(designerShareIcon, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.2")
        .to(designerCursor, {
            x: -200,
            y: 25,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        })
        .to(designerRegenerateButton, {
            opacity: 1,
            backgroundColor: "#50359166",
            borderColor: "white",
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.3")
        .to(designerRegenerateButton, {
            scale: 1,
            backgroundColor: "transparent",
            borderColor: "#503591",
            opacity: 0.5,
            duration: 0.5,
            ease: "power2.in"
        })
        .to(designerShareIcon, {
            opacity: 0.1,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.3")
        .to(designerSecondFrameTopPanelTitleSplitText.chars, {
            opacity: 0,
            visibility: "hidden",
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out"
        }, "-=0.2")
        .call(() => {
            gsap.set(designerSecondFrameTopPanelTitle, { opacity: 0 });
            
            designerSecondFrameTopPanelTitle.textContent = "Regenerating image...";
            
            designerSecondFrameTopPanelTitleSplitText = new SplitText(designerSecondFrameTopPanelTitle, { type: "words,chars" });
            gsap.set(designerSecondFrameTopPanelTitleSplitText.chars, { opacity: 0, visibility: "hidden" });
            gsap.set(designerSecondFrameTopPanelTitleSplitText.words, { marginRight: "0.25em" });
            
            gsap.set(designerSecondFrameTopPanelTitle, { opacity: 1 });
            
            gsap.to(designerSecondFrameTopPanelTitleSplitText.chars, {
                opacity: 1,
                visibility: "visible",
                duration: 0.01,
                stagger: 0.03,
                ease: "none"
            });
        })
        .to(designerImageFinalTwoBlur, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.2")
        .to(designerImageFinalTwo, {
            opacity: 1,
            duration: 0.1,
            ease: "none"
        }, "-=0.3")
        .to(designerImageTwoLoadingIcon, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        }, "-=0.1")
        .to(designerImageTwoLoadingIcon, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1
        })
        .to(designerImageTwoLoadingIcon, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out"
        }, "-=0.2")
        .to(designerImageTwoBlurClip, {
            clipPath: "inset(50% 0% 0% 0%)",
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.1")
        .to(designerImageTwoBlurClip, {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 1.5,
            ease: "power3.out"
        })
        .to(designerPanelBgBlur, {
            zIndex: 0,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.5")
        .to(designerSecondFrameTopPanelTitleSplitText.chars, {
            opacity: 0,
            visibility: "hidden",
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out"
        }, "-=0.5")
        .call(() => {
            gsap.set(designerSecondFrameTopPanelTitle, { opacity: 0 });
            
            designerSecondFrameTopPanelTitle.textContent = "Image Created";
            
            designerSecondFrameTopPanelTitleSplitText = new SplitText(designerSecondFrameTopPanelTitle, { type: "words,chars" });
            gsap.set(designerSecondFrameTopPanelTitleSplitText.chars, { opacity: 0, visibility: "hidden" });
            gsap.set(designerSecondFrameTopPanelTitleSplitText.words, { marginRight: "0.25em" });
            
            gsap.set(designerSecondFrameTopPanelTitle, { opacity: 1 });
            
            gsap.to(designerSecondFrameTopPanelTitleSplitText.chars, {
                opacity: 1,
                visibility: "visible",
                duration: 0.01,
                stagger: 0.03,
                ease: "none"
            });
        })
        .to(designerShareIcon, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.3")
        .to(designerCursor, {
            x: -20,
            y: 25,
            duration: 1,
            ease: "power2.out"
        }, "-=0.3")
        .to(designerSaveButton, {
            opacity: 1,
            backgroundColor: "#50359166",
            borderColor: "white",
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.3")
        .to(designerSaveButton, {
            scale: 1,
            backgroundColor: "transparent",
            borderColor: "#503591",
            opacity: 0.5,
            duration: 0.5,
            ease: "power2.in"
        })
    designerSendButton.addEventListener('mouseenter', () => timeline.play());
    designerSendButton.addEventListener('mouseleave', () => {
        timeline.pause();
        timeline.restart();
    });
});