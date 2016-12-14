export async function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    
    await aurelia.start();
    aurelia.setRoot('app');
}