const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let brian = params.brian;
if (brian == null || brian != "yes") {
    document.body.style = "display: block;";
}
else
{
    alert("Access denied!");
}

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        if (mutationRecord.target == document.body) {
            const compStyles = window.getComputedStyle(mutationRecord.target);
            if (compStyles.getPropertyValue('display') != "none")
            {
                document.body.style = "display: none;";
            }
        }
    });    
});

const target = document.body;
observer.observe(target, { attributes : true, attributeFilter : ['style'] });