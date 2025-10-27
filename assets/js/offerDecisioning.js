document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(SplitText);

    const decisioningCursor = document.querySelector('.decisioning-active-cursor');
    const decisioningBirthdayOffersBox = document.querySelector('.decisioning-birthday-offers-box');
    const decisioningOfferingsBox = document.querySelector('.decisioning-offerings-box');
    const offeringsGuardrailContainer = document.querySelector('.offerings-guardrail-container');
    const decisioningLoyaltyTierTriggerBox = document.querySelector('.decisioning-loyalty-tier-trigger-box');
    const decisioningLoyaltyTierContent = document.querySelector('.decisioning-loyalty-tier-content');
    const decisioningPrimeCheckbox = document.querySelector('.decisioning-prime-checkbox');
    const decisioningPrimeCheckboxFill = document.querySelector('.decisioning-prime-checkbox-fill');
    const decisioningScheduleTriggerBox = document.querySelector('.decisioning-schedule-trigger-box');
    const decisioningScheduleContent = document.querySelector('.decisioning-schedule-content');
    const decisioningLoyaltyArrow = document.querySelector('.decisioning-loyalty-tier-trigger-box .decisioning-accordion-arrow');
    const decisioningScheduleArrow = document.querySelector('.decisioning-schedule-trigger-box .decisioning-accordion-arrow');
    const decisioningScheduleItems = document.querySelectorAll('.decisioning-schedule-item');
    const decisioningCappingRuleTriggerBox = document.querySelector('.decisioning-capping-rule-trigger-box');
    const decisioningCappingRuleContent = document.querySelector('.decisioning-capping-rule-content');
    const decisioningCappingRuleArrow = document.querySelector('.decisioning-capping-rule-trigger-box .decisioning-accordion-arrow');
    const decisioningCappingRuleItems = document.querySelectorAll('.decisioning-capping-rule-item');
    const decisioningMerlinOrb = document.querySelector('.decisioning-merlin-orb');
    const decisioningMerlinOrbBlur = document.querySelector('.decisioning-merlin-orb-blur');
    const decisioningMerlinOrbGradient = document.querySelector('.decisioning-merlin-orb-gradient');
    const decisioningMerlinOrbText = document.querySelector('.decisioning-merlin-orb-text');
    const decisioningMerlinOrbBottomTexts = document.querySelector('.decisioning-merlin-orb-bottom-texts');
    const decisioningMerlinOrbCustomPolicy = document.querySelector('.decisioning-merlin-orb-custom-policy');
    const decisioningMerlinOrbPriorityRanking = document.querySelector('.decisioning-merlin-orb-priority-ranking');
    const decisioningMerlinOrbAutoOptimize = document.querySelector('.decisioning-merlin-orb-auto-optimize');
    const decisioningBirthdayImage = document.querySelector('.decisioning-birthday-image');
    const decisioningLoyaltyBadgeTop = document.querySelector('.decisioning-loyalty-badge-top');
    const decisioningLoyaltyBadgeBottom = document.querySelector('.decisioning-loyalty-badge-bottom');
    const decisioningBirthdayVideo = document.querySelector('.decisioning-birthday-video');
    const decisioningPhoneImage = document.querySelector('.decisioning-phone-image');
    const decisioningPhoneVideo = document.querySelector('.decisioning-phone-image video');
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 4 });

    timeline
        .set(decisioningCursor, { opacity: 0, x: 200, y: 100 })
        .set(offeringsGuardrailContainer, { opacity: 0, y: 50 })
        .set(decisioningLoyaltyTierContent, { height: 0, opacity: 0, overflow: "hidden", marginTop: 0 })
        .set(decisioningPrimeCheckboxFill, { scale: 0, opacity: 0 })
        .set(decisioningScheduleContent, { height: 0, opacity: 0, overflow: "hidden" })
        .set(decisioningScheduleItems, { opacity: 0, y: 20 })
        .set(decisioningCappingRuleContent, { height: 0, opacity: 0, overflow: "hidden", marginTop: 0 })
        .set(decisioningCappingRuleItems, { opacity: 0, y: 20 })
        .set(decisioningMerlinOrb, { opacity: 0, scale: 0.8, y: 20 })
        .set(decisioningMerlinOrbBlur, { opacity: 0, scale: 0.8, y: 20 })
        .set(decisioningMerlinOrbGradient, { opacity: 0, scale: 0.9, y: 10 })
        .set(decisioningMerlinOrbText, { opacity: 0, y: 15 })
        .set(decisioningMerlinOrbBottomTexts, { opacity: 0, y: 20 })
        .set(decisioningMerlinOrbCustomPolicy, { opacity: 0, x: -20 })
        .set(decisioningMerlinOrbPriorityRanking, { opacity: 0, x: 20 })
        .set(decisioningMerlinOrbAutoOptimize, { opacity: 0, y: 15 })
        .set(decisioningBirthdayImage, { opacity: 0, scale: 0 })
        .set(decisioningLoyaltyBadgeTop, { opacity: 0, scale: 0, rotation: 45 })
        .set(decisioningLoyaltyBadgeBottom, { opacity: 0, scale: 0, rotation: -45 })
        .set(decisioningPhoneImage, { opacity: 0, y: 200 })
        .set(decisioningCursor, { opacity: 0, x: 200, y: 100 })
        .set(offeringsGuardrailContainer, { opacity: 0, y: 50 })
        .set(decisioningPhoneImage, { opacity: 0, y: 200 })



        .to(decisioningCursor, {
            opacity: 1,
            y: 50,
            x: 100,
            duration: 0.4,
            ease: "power2.out"
        })
        .to(decisioningBirthdayOffersBox, {
            scale: 0.95,
            duration: 0.08,
            ease: "power2.out"
        })
        .to(decisioningBirthdayOffersBox, {
            scale: 1,
            duration: 0.15,
            borderColor: "#FFFFFFF",
            ease: "power2.in"
        })
        .to(decisioningOfferingsBox, {
            y: -80,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out"
        }, "+=0.1")
        .call(() => {
            if (decisioningBirthdayVideo && decisioningPhoneVideo) {
                decisioningBirthdayVideo.currentTime = 0;
                decisioningPhoneVideo.currentTime = 0;
            }
        })
        .to(offeringsGuardrailContainer, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.6")
        .to(decisioningLoyaltyTierTriggerBox, {
            scale: 0.95,
            duration: 0.08,
            ease: "power2.out"
        }, "+=0.1")
        .to(decisioningLoyaltyTierTriggerBox, {
            scale: 1,
            duration: 0.15,
            ease: "power2.in"
        })
        .to(decisioningLoyaltyTierContent, {
            height: "auto",
            opacity: 1,
            marginTop: "1.25rem",
            duration: 0.4,
            ease: "power2.out"
        }, "+=0.05")
        .to(decisioningLoyaltyTierTriggerBox, {
            backgroundColor: "#301D643D",
            duration: 0.2,
            ease: "power2.out"
        }, "-=0.4")
        .to(decisioningLoyaltyArrow, {
            rotation: 180,
            duration: 0.4,
            ease: "power2.out"
        }, "-=0.4")
        .to(decisioningCursor, {
            x: 110,
            y: 80,
            duration: 0.4,
            ease: "power2.out"
        }, "+=0.2")
        .to(decisioningPrimeCheckbox, {
            scale: 0.95,
            duration: 0.08,
            ease: "power2.out"
        }, "-=0.05")
        .to(decisioningPrimeCheckbox, {
            scale: 1,
            duration: 0.15,
            ease: "power2.in"
        })
        .to(decisioningPrimeCheckboxFill, {
            scale: 1,
            opacity: 1,
            duration: 0.2,
            ease: "back.out(1.7)"
        }, "-=0.05")
        .to(decisioningLoyaltyTierContent, {
            height: 0,
            opacity: 0,
            marginTop: 0,
            duration: 0.3,
            ease: "power2.in"
        }, "+=0.2")
        .to(decisioningLoyaltyArrow, {
            rotation: 0,
            duration: 0.3,
            ease: "power2.in"
        }, "-=0.3")
        .to(decisioningCursor, {
            x: 120,
            y: 120,
            duration: 0.4,
            ease: "power2.out"
        })
        .to(decisioningScheduleTriggerBox, {
            scale: 0.95,
            duration: 0.08,
            ease: "power2.out"
        }, "+=0.1")
        .to(decisioningScheduleTriggerBox, {
            scale: 1,
            duration: 0.15,
            ease: "power2.in"
        })
        .to(decisioningScheduleContent, {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
        }, "+=0.05")
        .to(decisioningScheduleTriggerBox, {
            backgroundColor: "#301D643D",
            duration: 0.2,
            ease: "power2.out"
        }, "-=0.4")
        .to(decisioningScheduleArrow, {
            rotation: 180,
            duration: 0.4,
            ease: "power2.out"
        }, "-=0.4")
        .to(decisioningScheduleItems, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.08
        }, "-=0.3")
        .to(decisioningScheduleContent, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
        }, "+=0.4")
        .to(decisioningScheduleArrow, {
            rotation: 0,
            duration: 0.3,
            ease: "power2.in"
        }, "-=0.3")
        .to(decisioningCursor, {
            x: 160,
            y: 200,
            duration: 0.4,
            ease: "power2.out"
        })
        .to(decisioningCappingRuleTriggerBox, {
            scale: 0.95,
            duration: 0.08,
            ease: "power2.out"
        }, "+=0.1")
        .to(decisioningCappingRuleTriggerBox, {
            scale: 1,
            duration: 0.15,
            ease: "power2.in"
        })
        .to(decisioningCappingRuleContent, {
            height: "auto",
            opacity: 1,
            marginTop: "1.25rem",
            duration: 0.4,
            ease: "power2.out"
        }, "+=0.05")
        .to(decisioningCappingRuleTriggerBox, {
            backgroundColor: "#301D643D",
            duration: 0.2,
            ease: "power2.out"
        }, "-=0.4")
        .to(decisioningCappingRuleArrow, {
            rotation: 180,
            duration: 0.4,
            ease: "power2.out"
        }, "-=0.4")
        .to(decisioningCappingRuleItems, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.1
        }, "-=0.3")
        .to(decisioningCappingRuleContent, {
            height: 0,
            opacity: 0,
            marginTop: 0,
            duration: 0.3,
            ease: "power2.in"
        }, "+=0.6")
        .to(decisioningCappingRuleArrow, {
            rotation: 0,
            duration: 0.3,
            ease: "power2.in"
        }, "-=0.3")
        .to(offeringsGuardrailContainer, {
            opacity: 0,
            scale: 0.95,
            y: 10,
            duration: 0.3,
            ease: "power2.in"
        }, "+=0.1")
        .to(decisioningMerlinOrb, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
        }, "-=0.1")
        .to(decisioningMerlinOrbBlur, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
        }, "-=0.4")
        .to(decisioningMerlinOrbGradient, {
            opacity: 1,
            scale: 1.05,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.8)"
        }, "+=0.05")
        .to(decisioningMerlinOrbGradient, {
            scale: 1,
            duration: 0.15,
            ease: "power2.out"
        }, "-=0.05")
        .to(decisioningMerlinOrbText, {
            opacity: 1,
            scale: 1.05,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.5)"
        }, "-=0.4")
        .to(decisioningMerlinOrbText, {
            scale: 1,
            duration: 0.15,
            ease: "power2.out"
        }, "-=0.05")
        .to(decisioningMerlinOrbBottomTexts, {
            opacity: 1,
            scale: 1.02,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.3)"
        }, "-=0.4")
        .to(decisioningMerlinOrbBottomTexts, {
            scale: 1,
            duration: 0.15,
            ease: "power2.out"
        }, "-=0.05")
        .to(decisioningMerlinOrbCustomPolicy, {
            opacity: 1,
            scale: 1.1,
            x: 0,
            duration: 0.3,
            ease: "back.out(1.8)"
        }, "-=0.4")
        .to(decisioningMerlinOrbCustomPolicy, {
            scale: 1,
            duration: 0.15,
            ease: "power2.out"
        }, "-=0.05")
        .to(decisioningMerlinOrbPriorityRanking, {
            opacity: 1,
            scale: 1.1,
            x: 0,
            duration: 0.3,
            ease: "back.out(1.8)"
        }, "-=0.3")
        .to(decisioningMerlinOrbPriorityRanking, {
            scale: 1,
            duration: 0.15,
            ease: "power2.out"
        }, "-=0.05")
        .to(decisioningMerlinOrbAutoOptimize, {
            opacity: 1,
            scale: 1.15,
            y: 0,
            duration: 0.5,
            ease: "back.out(2.2)"
        }, "-=0.3")
        .to(decisioningMerlinOrbAutoOptimize, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
        }, "-=0.1")
        .to([decisioningMerlinOrb, decisioningMerlinOrbBlur, decisioningMerlinOrbGradient, decisioningMerlinOrbText, decisioningMerlinOrbBottomTexts], {
            scale: 0.65,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in"
        }, "+=0.8")
        .to(decisioningBirthdayImage, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
        }, "-=0.4")
        .to(decisioningLoyaltyBadgeTop, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.2")
        .to(decisioningLoyaltyBadgeBottom, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.6")
        .to(decisioningBirthdayImage, {
            y: -window.innerHeight * 0.18,
            duration: 1.0,
            ease: "power2.out"
        }, "+=0.5")
        .to(decisioningPhoneImage, {
            opacity: 1,
            y: window.innerHeight * 0.2,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.2")
        .to(".decisioning-video", {
            duration: 1.0,
            onComplete: () => {
                console.log('Video animation complete, starting videos...');
                console.log('Birthday video:', decisioningBirthdayVideo);
                console.log('Phone video:', decisioningPhoneVideo);
                
                if (decisioningBirthdayVideo && decisioningPhoneVideo) {
                    // decisioningBirthdayVideo.currentTime = 0;
                    // decisioningPhoneVideo.currentTime = 0;
            
                    decisioningBirthdayVideo.play();
                    decisioningPhoneVideo.play();
                    console.log('Videos started playing');
                } else {
                    console.log('Video elements not found!');
                }
            }
        })
})