const faqArray = [
  {
    q: `What is Conan?`,
    a:
      `First, the Conan package manager lets developers capture the artifacts which are created during builds of libraries and applications and store them as a “Conan Package”. This is often a combination of headers and libraries (static or dynamic), but can also include executables. Developers can then list the “Conan Packages” needed for other projects as “dependencies”, and Conan will pass all the artifacts to those projects as needed. With this strategy, package management with Conan provides a first-class mechanism for reusing code and sharing components across many projects. Finally, Conan has a server application upon which Conan repositories can be created. The Conan client can then upload and download Conan packages from these repositories, enabling developers to share packaged components among their teams, and across different development environments.`,
  },
  {
    q: `What are the benefits of using Conan?`,
    a:
      `Modern C and C++ software is very often developed as a collection of separate components, including libraries and applications. This usually includes a mix of open-source components, and private components. As a result, the process of building software becomes increasingly more difficult as the number of components in the project increases. Using a package manager such as Conan to define and maintain the relationships between these components makes building the build process much easier. It also enables powerful capabilities such as the ability to describe the build steps of each component in a universal format, as well as the ability to store and upload binaries which have been built to shared repositories.`,
  },
  {
    q: `Where can I get Conan packages?`,
    a:
      `<a href="https://conan.io/center/" target="_blank" rel="noopener noreferrer">ConanCenter</a> is a public, moderated, central repository maintained by the Conan team which contains hundreds of popular open-source libraries and applications. This is the best place to find packages for open-source projects so that you don’t have to create them yourself. The recipes for these packages can be found at <a href="https://conan.io/center/" target="_blank" rel="noopener noreferrer">ConanCenterIndex</a>.`,
  },
  {
    q: `Can I create my own Conan packages?`,
    a:
      `Most Conan users leverage it to create packages for their own components in addition to using it as a method for consuming open-source packages. You can quickly learn how to create your own recipes for Conan packages following the <a href="https://docs.conan.io" target="_blank" rel="noopener noreferrer">instructions in the documentation</a>. Once you’ve created some packages of your own, you can also learn how to <a href="https://docs.conan.io/en/latest/introduction.html#decentralized-package-manager" target="_blank" rel="noopener noreferrer">upload them to your own private Conan repositories</a>.`,
  },
  {
    q: `Can Conan store/manage pre-compiled binaries?`,
    a:
      `Yes, one of Conan’s core features is its ability to <a href="https://docs.conan.io/en/latest/introduction.html#binary-management" target="_blank" rel="noopener noreferrer">store and manage pre-compiled binaries</a> of libraries and applications. When a Conan package is used to build a library or application, it stores the binaries in a local cache. These binaries can be uploaded and shared via a remote Conan repository. In this way, any number of unique configurations can be built and stored within a single package, including different operating systems, compilers, compiler versions and architectures.`,
  },
  {
    q: `Can I Integrate my build system/tool with Conan?`,
    a:
      `Yes, Conan supports most <a href="https://docs.conan.io/en/latest/integrations.html" target="_blank" rel="noopener noreferrer">popular C and C++ build systems</a> out of the box, including CMake, Autotools, MSBuild, B2 and others. It is also extensible, enabling users to easily add support for custom or proprietary build systems, which are common in enterprise organizations. With Conan, you can build and package components regardless of what build system each component uses.`,
  },
  {
    q: `Can Conan manage different versions of the same library/package?`,
    a:
      `Yes, Conan has <a href="https://docs.conan.io/en/latest/versioning/introduction.html" target="_blank" rel="noopener noreferrer">robust comprehension of versioning</a>.  with Conan, each version of each library or package is managed independently in the repository. Any number of versions can be stored in the local cache or remote repository at the same time, each with its own pre-built binaries.  This is great when you have different applications which depend on different versions of the same library or package, or when you want to want to switch the version of a dependency for a given project.  Both cases are trivial and fully supported.`,
  },
  {
    q: `Can I create my own private repository for hosting Conan packages?`,
    a:
      `Yes, Conan includes the ability to <a href="https://docs.conan.io/en/latest/introduction.html#decentralized-package-manager" target="_blank" rel="noopener noreferrer">create and host private Conan repositories</a> for sharing packages. JFrog’s “Artifactory” application is the premier enterprise repository hosting platform for Conan packages. Artifactory CE for C/C++ is a free edition, which is designed to provide the C/C++ developer community with the ability to create and host Conan repositories at no cost, and with the benefits of maturity and robustness of the Artifactory server application. JFrog also provides Artifactory hosted as a cloud service which also includes a free tier. Conan repositories can be created and hosted there as well.`,
  },
  {
    q: `What platforms can I use Conan with?`,
    a:
      `<a href="https://docs.conan.io/en/latest/introduction.html#all-platforms-all-build-systems-and-compilers" target="_blank" rel="noopener noreferrer">Conan is multi-platform</a>. This means two things. First, it means that the Conan client can run on Linux, Windows, macOS, and anywhere else python can run. Second, it means that it can build and store packages for any platform. If you have a compiler or cross-compiler which can target a platform, Conan can store the binaries for it. Common examples include mobile platforms like Android and IOS, real-time hardware platforms, and embedded hardware platforms including bare-metal devices.`,
  },
  {
    q: `Is Conan Stable?`,
    a:
      `Yes.  Conan maintains a <a href="https://docs.conan.io/en/latest/introduction.html#stable" target="_blank" rel="noopener noreferrer">strong commitment to stability</a>. Packages built with a major version such as Conan 1.x will continue to work for all future Conan 1.x versions. If there’s a breaking change to the package model, it won’t happen until the next major Conan version is released (such as 2.x for example).`,
  },
  {
    q: `How is Conan licensed?`,
    a:
      `The Conan project is published with the very permissive <a href="https://docs.conan.io/en/latest/introduction.html#open-source" target="_blank" rel="noopener noreferrer">MIT license</a>.`,
  },
  {
    q: `How is the Conan project maintained?`,
    a:
      `<a href="http://jfrog.com/" target="_blank" rel="noopener noreferrer">JFrog Inc.</a> maintains Conan with a dedicated full-time development team .  This team includes the Conan founders, and several additional developers. The Conan team also has a formal community engagement and feedback strategy known as the <a href="https://conan.io/tribe.html" target="_blank" rel="noopener noreferrer">Conan Tribe</a>. The tribe is composed of over 70 volunteers from the Conan user community who have committed to providing input on major roadmap decisions whenever the Conan team requests it. `,
  },
  {
    q: `How active is the Conan project?`,
    a:
      `In addition to a team of full-time maintainers, Conan has a very active user community which submits dozens of pull requests each month. In 2020, Conan received over <a href="https://github.com/conan-io/conan-io.github.io/pulls" target="_blank" rel="noopener noreferrer">3500 PRs</a> in total. Also, the #conan slack channel has 1200 members, and is one of the most active channels in the <a href="https://cppalliance.org/slack/" target="_blank" rel="noopener noreferrer">C++ community</a>.`,
  },
  {
    q: `What resources exist to help me learn Conan?`,
    a:
      `The Conan team has created multiple interactive, self-paced Conan training courses. 
      These courses are all available completely free, courtesy of JFrog in the <a href="https://academy.jfrog.com/series/conan" target="_blank" rel="noopener noreferrer">JFrog academy</a>.`,
  },
];
jQuery(($) => {
  const faqListLeft  = document.getElementById('faqQuestionsListLeft');
  const faqListRight = document.getElementById('faqQuestionsListRight');

  const halfLengthFaqArray = Math.ceil(faqArray.length / 2)

  faqArray.forEach((el, i) => {
    let n = i+1
    let target = faqListLeft
    if (n > halfLengthFaqArray)  target = faqListRight
    const liEl = document.createElement("li");
    liEl.classList.add("faq-anchor");
    liEl.innerHTML = `
        <a href="#faq-${i+1}">${el.q}</a>
        `;
      target.appendChild(liEl);
  });

  
  const accordion = document.getElementById("faqAccordion");
  if (accordion) {

    faqArray.forEach((el, i) => {
      const liEl = document.createElement("li");
      liEl.classList.add("faq-element");
      liEl.innerHTML = `
          <div class="top d-flex justify-content-between" id="faq-${i+1}">
              <h3 class="question pt-1 pr-2">${el.q}</h3>
              <div class="arrow d-none">
                  <svg
                      fill="none"
                      height="21"
                      viewBox="0 0 21 21"
                      width="21"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path d="M7.49986 18.3722L17.0002 11.8722L7.49998 5.30793" stroke="#A5A5A5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>  
              </div>
          </div>
          <div class="bottom"> 
              <div class="answer">
                <div class="pb-2">${el.a}</div>
              </div> 
          </div>
          `;
      accordion.appendChild(liEl);
    });

    $(document).on("click", "li.faq-element", function (e) {
        return //faq sliding is cancelled. open always
        if (
          $(e.target).hasClass("answer") ||
          $(e.target).parents(".answer").length
        ) {
          return;
        }
        let that = $(this);
        that
          .toggleClass("active")
          .find(".answer")
          .slideToggle();
    });
  }
});