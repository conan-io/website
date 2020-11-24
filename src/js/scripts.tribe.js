
// Shorten a string to less than maxLen characters without truncating words.
const shorten = (str, maxLen, separator = ' ')=>{
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}

//
const tribeCompareProperty = (a,b)=>{
  if (a.hasOwnProperty('description') && !b.hasOwnProperty('description')) {
    return -1
  }
  if (!a.hasOwnProperty('description') && b.hasOwnProperty('description')) {
    return 1
  }
  return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
}

tribeMembers.sort((a,b) => {
  if (a.hasOwnProperty('image') && !b.hasOwnProperty('image')) return -1;
  if (!a.hasOwnProperty('image') && b.hasOwnProperty('image')) return 1;
  if (a.hasOwnProperty('image') && b.hasOwnProperty('image')) {
    return tribeCompareProperty(a,b)
  }
  return tribeCompareProperty(a,b)
}); 

const anonymousImg = 'anonymous.png'

jQuery((function(t) { 
  if (t('body').hasClass('tribe')) {
     const membersRow    = document.getElementById('tribeMembersRow')
     const $membersModal = $('#conanTribeMemberModal')

     tribeMembers.forEach((oneMember, i) => {
       const oneMemberHTML = getTribeMemberHTML(i, oneMember.name, oneMember.image, oneMember.description, oneMember.twitter, oneMember.linkedin)
       membersRow.insertAdjacentHTML('beforeend',oneMemberHTML)
       t('.lazy').Lazy()
     });
     $(document).on('click', '.openTribeMemberModal', function() {
        const memberId = $(this).data('json-id')
        let memberInfo = tribeMembers[memberId]
        
        setMembersModalContent($membersModal, memberInfo)
        
        $membersModal.modal('show')
     })
  }
}))

const getTribeMemberHTML = (id, name, image, description = '', twitter = false , linkedin = false) => {
  
  let twitterHTML = '', linkedinHTML = '', shortDescription = ''
  
  if (description.length > 170 && description !== '') {
    shortDescription = shorten(description, 170) + '...'
  } else {
    shortDescription = description
  }

  if (twitter) twitterHTML = `<li>
  <a class="mr-2 tm_TwitterUrl" href="${twitter}"
    ><img class="lazy" data-src="img/social/twitter.svg" alt="twitter"
  /></a>
</li>`
  
  if (linkedin) linkedinHTML = `<li>
  <a class="mr-2 tm_linkedinUrl" href="${linkedin}"
    ><img class="lazy" data-src="img/social/linkedin.svg" alt="linkedin"
  /></a>
</li>`

  if (!image) image = anonymousImg
  
  return `<div class="col-sm-6 col-md-4 col-lg-3 mb-4  one-tribe-member oneTribeMember" id="tribeMember_${id}" data-json-id=${id}>
    <div class="p-3 bg-bright-gray h-100 tm_Id">
              
      <div class="d-flex flex-column justify-content-between h-100">
        <div class="content-top mb-3">
          <img class="w-100 object-cover text-center bg-gray tm_Image lazy" data-src="../img/conan-tribe-nov-2020/${image}" alt="${name}" width="278" height="252">
          <h3 class="mt-3 tm_Name">${name}</h3>
          <p class="short-description">${shortDescription} </p>
          <p class="tm_Description d-none">${description}</p>
        </div>

        <div class="content-bottom">
          <ul class="socials d-flex mt-1 mb-0 pt-2 pl-0 list-unstyled">
            ${linkedinHTML}
            ${twitterHTML}
          </ul>
            
          <button type="button" class="mt-3 big-btn bg-blue white openTribeMemberModal" data-json-id=${id}>
            View Profile
          </button>

        </div>
      </div>
              
    </div>
  </div>`
}

const setMembersModalContent = ($membersModal, memberInfo) => {

  if (!memberInfo.image) memberInfo.image = anonymousImg

  $membersModal.find('.tmModal_Name').text(memberInfo.name)
  $membersModal.find('.tmModal_Image').attr('src', '../img/conan-tribe-nov-2020/'+memberInfo.image).attr('alt', memberInfo.name)
  if (memberInfo.description) {
    $membersModal.find('.tmModal_LongDescription').text(memberInfo.description)
  } else {
    $membersModal.find('.tmModal_LongDescription').text('')
  }
  //Twitter
  if (memberInfo.hasOwnProperty('twitter')) {
    $membersModal.find('.tmModal_TwitterUrl').attr('href', memberInfo.twitter).removeClass('d-none')
  } else {
    $membersModal.find('.tmModal_TwitterUrl').addClass('d-none')
  }
  //LinkedIn
  if (memberInfo.hasOwnProperty('linkedin')) {
    $membersModal.find('.tmModal_LinkedinUrl').attr('href', memberInfo.linkedin).removeClass('d-none')
  } else {
    $membersModal.find('.tmModal_LinkedinUrl').addClass('d-none')
  }
}