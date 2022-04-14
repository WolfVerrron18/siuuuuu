const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup-body__content-close')
const popupButton = document.querySelector('.popup-body__content-button span')
const popupLinks = document.querySelectorAll('.circle__link')

popupButton.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('popup-active');
})
popupClose.addEventListener('click', () => {
    popup.classList.remove('popup-active');
})

const hoverBlur = document.querySelectorAll('.img-hover__blur')

hoverBlur.forEach((link) => {
    link.addEventListener('click',function () {
        popup.classList.add('popup-active')
    })
})

popupLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.add('popup-active');
    })
})
const windowInnerWidth = document.documentElement.clientWidth
if (windowInnerWidth > 1024) {
//НАВЕДЕНИЕ НА СИНИЙ КРУГ(ДЁШЕВО)
    const blockBlueImg = document.querySelector('.img-hover__blueOne')
    const blockBlueLink = document.querySelector('.circle-blue__linkOne')
//НАВЕДЕНИЕ НА СИНИЙ КРУГ(ТРЭЭЭШ)
    const blockBlueTwoImg = document.querySelector('.img-hover__blueTwo')
    const blockBlueTwoLink = document.querySelector('.circle-blue__linkTwo')
//НАВЕДЕНИЕ НА СИНИЙ КРУГ(ДОЛГО)
    const blockBlueThreeImg = document.querySelector('.img-hover__blueThree')
    const blockBlueThreeLink = document.querySelector('.circle-blue__linkThree')
//НАВЕДЕНИЕ НА СИНИЙ КРУГ(ТЫ САМ В ЭТО ВЕРИШЬ?)
    const blockBlueFourImg = document.querySelector('.img-hover__blueFour')
    const blockBlueFourLink = document.querySelector('.circle-blue__linkFour')
//НАВЕДЕНИЕ НА ОРАНЖЕВЫЙ КРУГ(БЫСТРО)
    const blockOrangeImg = document.querySelector('.img-hover__orange')
    const blockOrangeLink = document.querySelector('.circle-orange__linkOne')
 /*НАВЕДЕНИЕ НА ЗЕЛЁНЫЙ КРУГ(ДОРОГО)*/
    const blockGreenImg = document.querySelector('.img-hover__green')
    const blockGreenLink = document.querySelector('.circle-green__linkOne')
/*НАВЕДЕНИЕ НА ЗЕЛЁНЫЙ КРУГ(КАЧЕСТВЕННО)*/
    const blockGreenImgTwo = document.querySelector('.img-hover__greenTwo')
    const blockGreenLinkTwo = document.querySelector('.circle-green__linkTwo')

    popupLinks.forEach((link) => {
//НАВЕДЕНИЕ НА СИНИЙ КРУГ(ДЁШЕВО)
        blockBlueLink.addEventListener('mousemove', function () {
            if (!link.classList.contains('circle-blue__linkOneJS')) {
                blockBlueImg.classList.add('hover-blur')
                blockBlueLink.classList.add('circle-blue__linkOneJS')
            }
        })
        blockBlueLink.addEventListener('mouseout', function () {
            if (link.classList.contains('circle-blue__linkOneJS')) {
                blockBlueImg.classList.remove('hover-blur')
                blockBlueLink.classList.remove('circle-blue__linkOneJS')
            }
        })
//НАВЕДЕНИЕ НА СИНИЙ КРУГ(ТРЭЭЭШ)
        blockBlueTwoLink.addEventListener('mousemove', function () {
            if (!link.classList.contains('circle-blue__linkTwoJS')) {
                blockBlueTwoImg.classList.add('hover-blur')
                blockBlueTwoLink.classList.add('circle-blue__linkTwoJS')
            }
        })
        blockBlueTwoLink.addEventListener('mouseout', function () {
            if (link.classList.contains('circle-blue__linkTwoJS')) {
                blockBlueTwoImg.classList.remove('hover-blur')
                blockBlueTwoLink.classList.remove('circle-blue__linkTwoJS')
            }
        })
//НАВЕДЕНИЕ НА СИНИЙ КРУГ(ДОЛГО)
        blockBlueThreeLink.addEventListener('mousemove', function () {
            if (!link.classList.contains('circle-blue__linkThreeJS')) {
                blockBlueThreeImg.classList.add('hover-blur')
                blockBlueThreeLink.classList.add('circle-blue__linkThreeJS')
            }
        })
        blockBlueThreeLink.addEventListener('mouseout', function () {
            if (link.classList.contains('circle-blue__linkThreeJS')) {
                blockBlueThreeImg.classList.remove('hover-blur')
                blockBlueThreeLink.classList.remove('circle-blue__linkThreeJS')
            }
        })
//НАВЕДЕНИЕ НА СИНИЙ КРУГ(ТЫ САМ В ЭТО ВЕРИШЬ?)
        blockBlueFourLink.addEventListener('mousemove', function () {
            if (!link.classList.contains('circle-blue__linkFourJS')) {
                blockBlueFourImg.classList.add('hover-blur')
                blockBlueFourLink.classList.add('circle-blue__linkFourJS')
            }
        })
        blockBlueFourLink.addEventListener('mouseout', function () {
            if (link.classList.contains('circle-blue__linkFourJS')) {
                blockBlueFourImg.classList.remove('hover-blur')
                blockBlueFourLink.classList.remove('circle-blue__linkFourJS')
            }
        })
//НАВЕДЕНИЕ НА ОРАНЖЕВЫЙ КРУГ(БЫСТРО)
        blockOrangeLink.addEventListener('mousemove', function () {
            if (!link.classList.contains('circle-orange__linkOneJS')) {
                blockOrangeImg.classList.add('hover-blur')
                blockOrangeLink.classList.add('circle-orange__linkOneJS')
            }
        })
        blockOrangeLink.addEventListener('mouseout', function () {
            if (link.classList.contains('circle-orange__linkOneJS')) {
                blockOrangeImg.classList.remove('hover-blur')
                blockOrangeLink.classList.remove('circle-orange__linkOneJS')
            }
        })
/*НАВЕДЕНИЕ НА ЗЕЛЁНЫЙ КРУГ(ДОРОГО)*/
        blockGreenLink.addEventListener('mousemove', function () {
            if (!link.classList.contains('circle-green__linkOneJS')) {
                blockGreenImg.classList.add('hover-blur')
                blockGreenLink.classList.add('circle-green__linkOneJS')
            }
        })

        blockGreenLink.addEventListener('mouseout', function () {
            if (link.classList.contains('circle-green__linkOneJS')) {
                blockGreenImg.classList.remove('hover-blur')
                blockGreenLink.classList.remove('circle-green__linkOneJS')
            }
        })
/*НАВЕДЕНИЕ НА ЗЕЛЁНЫЙ КРУГ(КАЧЕСТВЕННО)*/
        blockGreenLinkTwo.addEventListener('mousemove', function () {
            if (!link.classList.contains('circle-green__linkTwoJS')) {
                blockGreenImgTwo.classList.add('hover-blur')
                blockGreenLinkTwo.classList.add('circle-green__linkTwoJS')
            }
        })
        blockGreenLinkTwo.addEventListener('mouseout', function () {
            if (link.classList.contains('circle-green__linkTwoJS')) {
                blockGreenImgTwo.classList.remove('hover-blur')
                blockGreenLinkTwo.classList.remove('circle-green__linkTwoJS')
            }
        })
    })

    hoverBlur.forEach((hover) => {
        hover.addEventListener('mousemove', function () {
            this.classList.add('hover-blur')
            if (blockBlueImg.classList.contains('hover-blur')) {
                blockBlueLink.classList.add('circle-blue__linkOneJS')
            }
            else if (blockBlueTwoImg.classList.contains('hover-blur')) {
                blockBlueTwoLink.classList.add('circle-blue__linkTwoJS')
            }
            else if (blockBlueThreeImg.classList.contains('hover-blur')) {
                blockBlueThreeLink.classList.add('circle-blue__linkThreeJS')
            }
            else if (blockBlueFourImg.classList.contains('hover-blur')) {
                blockBlueFourLink.classList.add('circle-blue__linkFourJS')
            }
            else if (blockOrangeImg.classList.contains('hover-blur')) {
                blockOrangeLink.classList.add('circle-orange__linkOneJS')
            }
            else if (blockGreenImg.classList.contains('hover-blur')) {
                blockGreenLink.classList.add('circle-green__linkOneJS')
            }
            else if (blockGreenImgTwo.classList.contains('hover-blur')) {
                blockGreenLinkTwo.classList.add('circle-green__linkTwoJS')
            }
        })
        hover.addEventListener('mouseout', function () {
            this.classList.remove('hover-blur')
            blockBlueLink.classList.remove('circle-blue__linkOneJS')
            blockBlueTwoLink.classList.remove('circle-blue__linkTwoJS')
            blockBlueThreeLink.classList.remove('circle-blue__linkThreeJS')
            blockBlueFourLink.classList.remove('circle-blue__linkFourJS')
            blockOrangeLink.classList.remove('circle-orange__linkOneJS')
            blockGreenLink.classList.remove('circle-green__linkOneJS')
            blockGreenLinkTwo.classList.remove('circle-green__linkTwoJS')
        })

    })
}


const expand = document.querySelector('.expand')
const collapse = document.querySelector('.collapse')
const blockText = document.querySelector('.masterpiece-wrapper-subtitles')
const sectionMaster = document.querySelector('.masterpiece')
expand.addEventListener('click', function () {
    collapse.classList.add('collapse-click')
    expand.classList.add('expand-click')
    sectionMaster.classList.add('masterpiece-click')
    blockText.classList.add('masterpiece-wrapper-subtitles_anim')
    blockText.classList.remove('masterpiece-wrapper-subtitles')
})
collapse.addEventListener('click', function () {
    blockText.classList.remove('masterpiece-wrapper-subtitles_anim')
    expand.classList.remove('expand-click')
    collapse.classList.remove('collapse-click')
    blockText.classList.add('masterpiece-wrapper-subtitles')
})
