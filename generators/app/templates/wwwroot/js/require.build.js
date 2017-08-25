({
    include: ['requireLib'],
    mainConfigFile: "require.build.js",
    name: "startup",
    out: "../scripts.js",
    optimize: "uglify",
    paths: {
        requireLib: 'require',
    },
    preserveLicenseComments: false,
})